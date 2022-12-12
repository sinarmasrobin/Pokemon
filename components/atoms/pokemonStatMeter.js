function StatMeter({statName, value}) {
    // let percent = Math.floor((value*100)/maxValue).toString()
    // let classPercent = "bg-green-300 opacity-50 h-2.5 w-[" + percent + "%]"
    const getPercentageGrid = () => {
        switch(Math.ceil(value/10)) {
            case 1:
                return "col-span-1"
            case 2:
                return "col-span-2"
            case 3:
                return "col-span-3"
            case 4:
                return "col-span-4"
            case 5:
                return "col-span-5"
            case 6:
                return "col-span-6"
            case 7:
                return "col-span-7"
            case 8:
                return "col-span-8"
            case 9:
                return "col-span-9"
            case 10:
                return "col-span-10"
            case 11:
                return "col-span-11"
            case 12:
                return "col-span-12"
            case 13:
                return "col-span-13"
            case 14:
                return "col-span-14"
            case 15:
                return "col-span-15"
            default:
                return "col-span-0"
        }
    }
    
    let gridStatSpan = getPercentageGrid()

    return (
        <div className="flex flex-col w-full">
            <p className="font-mono text-base font-bold capitalize">{statName} {value}</p>
            <div className="bg-neutral-400 rounded-full h-2.5 grid grid-cols-15">
                <div className={`bg-green-500 rounded-full opacity-100 h-2.5 ${gridStatSpan}`} />
            </div>
        </div>
    )
}

export default StatMeter;
