const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/${id}`,{method:"DELETE"})
    if(res.status === 200){
        location.reload()
        
    }
}