import Card from "./components/card"

let peopleObject = [
{
      name: "Alice",
      about: "Alice is a software engineer who loves hiking and playing the piano."
  },
{
      name: "Bob",
      about: "Bob is a graphic designer with a passion for photography and travel."
  },
{
      name: "Charlie",
      about: "Charlie is a biologist who enjoys birdwatching and gardening in his free time."
  },
{
      name: "Diana",
      about: "Diana is a teacher who is passionate about literature and community service."
  },
{
      name: "Evan",
      about: "Evan is a chef known for his innovative culinary creations and love for experimenting with flavors."
  },
{
      name: "Fiona",
      about: "Fiona is an artist specializing in abstract paintings and sculptures."
  },
  {
      name: "George",
      about: "George is a financial analyst who enjoys playing chess and mentoring aspiring professionals."
  },
{
      name: "Hannah",
      about: "Hannah is a scientist dedicated to environmental research and conservation efforts."
  },
{
      name: "Ian",
      about: "Ian is a musician who plays the guitar and writes his own songs."
  },
  {
      name: "Jasmine",
      about: "Jasmine is a veterinarian who has a soft spot for rescue animals and enjoys outdoor adventures."
  }
];




function App() {


  return (

    
    <>
    <div className="mt-20 flex justify-center" >
         <div className='bg-gray-500 md:max-w-screen-lg md:grid-cols-2 w-full grid  flex-wrap gap-2  p-4 object-bottom'>
    
         {peopleObject.map((person, index) => (
              <Card key={index} name={person.name} about={person.about} />
          ))}
    
         
  
    

         </div>
    </div>
    
    </>
  )
}

export default App
