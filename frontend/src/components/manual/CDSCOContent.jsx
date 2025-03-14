import CDSCOContentLeft from "./CDSCOContentLeft"
import CDSCOContentRight from "./CDSCOContentRight"

const CDSCOContent = () => {
  return (
    
    <div className="w-full overflow-x-hidden">
      <div className="max-w-[88rem] mx-auto p-12">
        <div className="flex gap-[48px] w-full">
            {/* Left Side */}
            
            <CDSCOContentLeft/>

            {/* Right Side */}
           <CDSCOContentRight/> 

        </div>

      </div>
    </div>
  )
}

export default CDSCOContent
