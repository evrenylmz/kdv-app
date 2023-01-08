

function Button(props){

    return(
    <div onClick={props.onPress} style={props.style} className="flex relative w-48 font-semibold justify-center text-black bg-white hover:text-white border-2 border-gray-600 items-center py-2 px-5 hover:bg-black rounded-md mb-1 transition-colors duration-200 cursor-pointer">
        
    
            {props.children}
    
        
        
        {props.title}
    </div>
)
}


export default Button