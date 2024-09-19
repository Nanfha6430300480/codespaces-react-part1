import './Hello.css' 

export default function Hello({firstname,lastname="Jaidee" ,age='25'}) 
{
  return (
    <>
      <h1>Hello world {firstname} {lastname} {age} </h1> 
    </>
  );
}

