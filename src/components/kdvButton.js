

function KdvButton(props){
    return(
        <div onClick={props.onPress} style={props.style} className="flex relative text-base md:text-lg w-1/4 py-3 md:py-2 font-semibold justify-center text-black hover:text-white border-2 border-gray-600 items-center whitespace-nowrap hover:bg-black rounded-md transition-colors duration-200 cursor-pointer select-none">
        
    
            {props.children}
    
        
        
        {props.title}
    </div>
    )
}




export default KdvButton