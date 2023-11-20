

const Button = ({btnName="Black" , btnColor = "gray", onClick }) => {


  return (
    <div onClick={() => onClick(btnColor)}
    className={`flex items-center justify-center bg-${btnColor}-500 w-fit px-4 py-2 rounded-full border hover:bg-white hover:border hover:border-black  text-white hover:text-black font-semibold hover:shadow-xl hover:cursor-pointer`}>
       
        {btnName} 
        
    </div>
  )
}

export default Button