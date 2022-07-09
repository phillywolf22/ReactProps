

const Grandchild = (props)=>{

    const var1 = props.var1

    return (
        <div>Name generated from Grandchild component : {props.nameGC()}
        <p>{var1}</p>
        </div>
        
    )
}

export default Grandchild