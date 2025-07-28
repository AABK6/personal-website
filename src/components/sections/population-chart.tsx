"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label } from 'recharts';
import { gsap } from 'gsap';

const CSV_DATA = `Entity,Code,Year,Population (historical estimates and future projections)
World,OWID_WRL,-10000,4501152
World,OWID_WRL,-9000,5687125
World,OWID_WRL,-8000,7314623
World,OWID_WRL,-7000,9651703
World,OWID_WRL,-6000,13278309
World,OWID_WRL,-5000,19155698
World,OWID_WRL,-4000,28859174
World,OWID_WRL,-3000,44577880
World,OWID_WRL,-2000,72685064
World,OWID_WRL,-1000,110530464
World,OWID_WRL,0,232268832
World,OWID_WRL,100,237052192
World,OWID_WRL,200,240762160
World,OWID_WRL,300,227702848
World,OWID_WRL,400,241697008
World,OWID_WRL,500,253395808
World,OWID_WRL,600,271638944
World,OWID_WRL,700,278346080
World,OWID_WRL,800,285870176
World,OWID_WRL,900,311142688
World,OWID_WRL,1000,323462624
World,OWID_WRL,1500,503051104
World,OWID_WRL,1600,516147616
World,OWID_WRL,1700,595456896
World,OWID_WRL,1800,954892352
World,OWID_WRL,1820,1065623616
World,OWID_WRL,1830,1148205440
World,OWID_WRL,1840,1209754496
World,OWID_WRL,1850,1287033856
World,OWID_WRL,1950,2493092801
World,OWID_WRL,1951,2536926981
World,OWID_WRL,1952,2584086282
World,OWID_WRL,1953,2634106196
World,OWID_WRL,1954,2685894824
World,OWID_WRL,1955,2740213742
World,OWID_WRL,1960,3015470858
World,OWID_WRL,1965,3334533671
World,OWID_WRL,1970,3694683753
World,OWID_WRL,1975,4070735208
World,OWID_WRL,1980,4447606162
World,OWID_WRL,1985,4868943409
World,OWID_WRL,1990,5327803039
World,OWID_WRL,1995,5758878939
World,OWID_WRL,2000,6171702952
World,OWID_WRL,2005,6586970109
World,OWID_WRL,2010,7021732097
World,OWID_WRL,2015,7470491849
World,OWID_WRL,2020,7887001253
World,OWID_WRL,2021,7954448327
World,OWID_WRL,2022,8021407128
World,OWID_WRL,2023,8091734853
World,OWID_WRL,2024,8161972496
World,OWID_WRL,2025,8231613055
World,OWID_WRL,2030,8569124874
World,OWID_WRL,2040,9177190161
World,OWID_WRL,2050,9664378554
World,OWID_WRL,2060,9989232258
World,OWID_WRL,2070,10189241908
World,OWID_WRL,2080,10283077976
World,OWID_WRL,2090,10271565034
World,OWID_WRL,2100,10180160680
`;

const END_YEAR = 2025;
const INITIAL_Y_MAX = 2e9;
const INDUSTRIAL_REVOLUTION_YEAR = 1740;

const parseCSV = (csvText: string) => {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    const data = [];
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const obj: { [key: string]: string } = {};
        headers.forEach((header, index) => {
            let value = values[index] ? values[index].trim() : '';
            obj[header] = value;
        });
        data.push(obj);
    }
    return data;
};

const formatYAxis = (tickItem: number) => {
    if (tickItem >= 1e9) return `${(tickItem / 1e9).toFixed(0)}B`;
    if (tickItem >= 1e6) return `${(tickItem / 1e6).toFixed(0)}M`;
    if (tickItem >= 1e3) return `${(tickItem / 1e3).toFixed(0)}K`;
    return tickItem.toString();
};

const formatXAxis = (tickItem: number) => {
    const roundedYear = Math.round(tickItem);
    if (roundedYear === 0) return '0';
    if (roundedYear < 0) return `${Math.abs(roundedYear)} BC`;
    return roundedYear.toString();
};

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg shadow-lg text-black">
                <p className="font-bold text-gray-800">{`Year: ${formatXAxis(label)}`}</p>
                <div style={{ color: '#8884d8' }}>
                    <span className="font-semibold text-gray-700">Population: </span>
                    <span className="font-mono text-gray-900">{`${Math.round(payload[0].value).toLocaleString()}`}</span>
                </div>
            </div>
        );
    }
    return null;
};

export default function PopulationChart() {
    const [year, setYear] = useState(-10000);
    const [isPlaying, setIsPlaying] = useState(false);
    const [yDomainMax, setYDomainMax] = useState(INITIAL_Y_MAX);
    const [industrialRevolutionOpacity, setIndustrialRevolutionOpacity] = useState(0);
    const [chartMargins, setChartMargins] = useState({ top: 20, right: 30, left: 50, bottom: 20 });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setChartMargins({ top: 10, right: 10, left: -30, bottom: 10 });
            } else {
                setChartMargins({ top: 20, right: 30, left: 50, bottom: 20 });
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const chartData = useMemo(() => {
        const parsedData = parseCSV(CSV_DATA);
        return parsedData
            .filter(d => d.Entity === 'World' && d['Population (historical estimates and future projections)'] && parseInt(d.Year, 10) <= END_YEAR)
            .map(d => ({
                year: parseInt(d.Year, 10),
                population: parseInt(d['Population (historical estimates and future projections)'], 10)
            }))
            .sort((a, b) => a.year - b.year);
    }, []);

    const { minYear, maxYear } = useMemo(() => {
        if (!chartData.length) return { minYear: -10000, maxYear: END_YEAR };
        return { minYear: chartData[0].year, maxYear: END_YEAR };
    }, [chartData]);

    const displayedData = useMemo(() => {
        if (year <= minYear) return [chartData[0]];
        if (year >= maxYear) return chartData.filter(d => d.year <= maxYear);

        const pastData = chartData.filter(d => d.year <= year);
        const nextPoint = chartData.find(d => d.year > year);
        const prevPoint = pastData[pastData.length - 1];

        if (!nextPoint || !prevPoint) return pastData;

        const yearRange = nextPoint.year - prevPoint.year;
        if (yearRange === 0) return pastData;

        const popRange = nextPoint.population - prevPoint.population;
        const progress = (year - prevPoint.year) / yearRange;
        const interpolatedPop = prevPoint.population + (popRange * progress);

        return [...pastData, { year, population: interpolatedPop }];
    }, [chartData, year, minYear, maxYear]);

    const currentMaxPop = useMemo(() => {
        if (!displayedData.length) return 0;
        return Math.max(...displayedData.map(d => d.population));
    }, [displayedData]);

    useEffect(() => {
        const targetMax = Math.max(INITIAL_Y_MAX, Math.ceil(currentMaxPop / 1e9) * 1e9);
        if (targetMax > yDomainMax) {
            gsap.to({ value: yDomainMax }, { value: targetMax, duration: 0.5, onUpdate: (self) => setYDomainMax(self.targets()[0].value) });
        }
    }, [currentMaxPop, yDomainMax]);

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setYear(prevYear => {
                    const increment = prevYear < 1800 ? 30 : 1;
                    const nextYear = prevYear + increment;
                    if (nextYear >= maxYear) {
                        setIsPlaying(false);
                        return maxYear;
                    }
                    return nextYear;
                });
            }, 25);
            return () => clearInterval(interval);
        }
    }, [isPlaying, maxYear]);

    useEffect(() => {
        if (year >= INDUSTRIAL_REVOLUTION_YEAR) {
            if (industrialRevolutionOpacity < 1) {
                gsap.to({ value: industrialRevolutionOpacity }, { value: 1, duration: 0.5, onUpdate: (self) => setIndustrialRevolutionOpacity(self.targets()[0].value) });
            }
        } else if (year < INDUSTRIAL_REVOLUTION_YEAR && industrialRevolutionOpacity > 0) {
            setIndustrialRevolutionOpacity(0);
        }
    }, [year, industrialRevolutionOpacity]);

    const handlePlayPause = useCallback(() => {
        if (year >= maxYear) { // Replay
            setYear(minYear);
            setYDomainMax(INITIAL_Y_MAX);
            setIndustrialRevolutionOpacity(0);
        }
        setIsPlaying(prev => !prev);
    }, [isPlaying, year, maxYear, minYear]);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newYear = parseInt(e.target.value, 10);
        setYear(newYear);
        if (isPlaying) setIsPlaying(false);
        const maxPopAtYear = Math.max(1, ...chartData.filter(d => d.year <= newYear).map(d => d.population));
        const targetMax = Math.max(INITIAL_Y_MAX, Math.ceil(maxPopAtYear / 1e9) * 1e9);
        setYDomainMax(targetMax);
    };

    return (
        <div className="bg-transparent text-white h-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between font-sans">
            <header className="w-full max-w-7xl text-center">
                <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-sky-500">
                    World Population Growth
                </h1>
                <p className="text-gray-400 mt-2">10,000 BC to {END_YEAR} AD</p>
            </header>

            <div className="w-full max-w-7xl h-[60vh] md:h-[70vh] p-0 sm:p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={displayedData} margin={chartMargins}>
                        <defs>
                            <linearGradient id="colorPopulation" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(74, 85, 104, 0.5)" />
                        <XAxis 
                            dataKey="year" 
                            stroke="#A0AEC0" 
                            tick={{ fill: '#A0AEC0', className: 'text-sm' }}
                            domain={[minYear, maxYear]}
                            type="number"
                            tickFormatter={formatXAxis}
                        />
                        <YAxis 
                            stroke="#A0AEC0"
                            tick={{ fill: '#A0AEC0', className: 'text-sm' }}
                            tickFormatter={formatYAxis}
                            domain={[0, yDomainMax]}
                            allowDataOverflow={true}
                            type="number"
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <ReferenceLine x={0} stroke="rgba(74, 85, 104, 0.5)" strokeDasharray="3 3" />
                        
                        <ReferenceLine 
                            x={INDUSTRIAL_REVOLUTION_YEAR} 
                            stroke="#38B2AC" 
                            strokeDasharray="4 4"
                            strokeOpacity={industrialRevolutionOpacity}
                        >
                            <Label 
                                value="Industrial Revolution" 
                                position="top"
                                fill="#38B2AC" 
                                fontSize={16}
                                angle={-90}
                                offset={40}
                                style={{ textAnchor: 'end', fillOpacity: industrialRevolutionOpacity }}
                            />
                        </ReferenceLine>

                        <Area
                            type="monotone"
                            dataKey="population"
                            name="World Population"
                            stroke="#8884d8"
                            fillOpacity={1}
                            fill="url(#colorPopulation)"
                            strokeWidth={2}
                            isAnimationActive={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <footer className="w-full max-w-4xl">
                <div className="p-2 bg-gray-800/50 rounded-xl shadow-lg border border-gray-700">
                    <div className="flex items-center justify-center space-x-4">
                        <button
                            onClick={handlePlayPause}
                            className="px-4 py-1 rounded-lg bg-sky-400 hover:bg-sky-500 text-white font-semibold opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
                        >
                            {isPlaying ? 'Pause' : (year >= maxYear ? 'Replay' : 'Play')}
                        </button>
                        <div className="flex-grow flex items-center space-x-4">
                            <span className="text-gray-400 text-sm font-mono w-20 text-center">{formatXAxis(minYear)}</span>
                            <input
                                type="range"
                                min={minYear}
                                max={maxYear}
                                step="10"
                                value={year}
                                onChange={handleSliderChange}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                             <span className="text-gray-400 text-sm font-mono w-20 text-center">{formatXAxis(maxYear)}</span>
                        </div>
                         <span className="text-base font-bold text-sky-400 w-28 text-center">{formatXAxis(year)}</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}