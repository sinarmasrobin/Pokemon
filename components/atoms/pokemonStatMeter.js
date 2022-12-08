function StatMeter({statName, value, percent}) {
    // let percent = Math.floor((value*100)/maxValue).toString()
    // let classPercent = "bg-green-300 opacity-50 h-2.5 w-[" + percent + "%]"
    return (
        <div className="flex flex-col w-full">
            <p className="font-mono text-base font-bold capitalize">{statName} {value}</p>
            <div className="bg-black rounded-full h-2.5 w-[100%]">
                <div className={`bg-green-500 rounded-full opacity-100 h-2.5 w-[${percent}%]`} />
            </div>
        </div>
    )
}

export default StatMeter;
