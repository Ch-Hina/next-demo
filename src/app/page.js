import Image from "next/image";




var data =["Mango","Apple","Orange","Banana"]

export default function Home() {
  return(
       <div>
       <ol>
        {data.map((fruit)  =>(
          <li key={fruit}>{fruit}</li>
        ))}
          
       </ol>
       
       </div>


  );
        

  
}
