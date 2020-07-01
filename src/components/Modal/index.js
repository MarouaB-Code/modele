import React from 'react'
 const Modal = ({showModal, children,hideModel}) => {

return (

showModal && (

<div className="modalBackground" onClick= {hideModel}>
    <div className="modalContainer">
{children}
    </div>


</div>


)




)




 }

 export default  Modal;