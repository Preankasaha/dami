  function handleClick(message) {
      return  alert(message);
      }
// function Button({ message, children }) {
//   <button onClick={()=>alert({message})}>
//     {children}
//   </button>
// }

// function AlertButton({ message, children }) {
//   return (
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }
export default function EventInterctivity() {
  return <>
    <button onClick={() => handleClick('v')}>Play</button>
    {/* <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton> */}
  </>
     
      
   
}