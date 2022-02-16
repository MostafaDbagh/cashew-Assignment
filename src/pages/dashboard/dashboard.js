import { useSelector } from "react-redux"

export const DashBoard = ()=>{
    const user = useSelector(s =>s)
    return (
        <>
        <div style={{  background: "#00b4db",
        background: "linear-gradient(to right, #00b4db, #0083b0)",
        height:'70px',
        display:"flex",
        justifyContent:'space-between',
        alignItems:'center',
        }}>
           
        
         <h1 style={{ marginLeft:'24px',fontStyle:'italic'}}>DashBoard page</h1>
        <p style={{ marginRight:'24px',fontSize:'18px'}}><strong>{user.user['currentUser']}</strong> </p>
        </div>
          
        </>
      
    )
}