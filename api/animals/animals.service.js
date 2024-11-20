const animals = [
    {
      id: 1,
      specie: "Wild",
      age: 11,
      name: "Wolf",
    },
    {
      id: 2,
      specie: "Wild",
      age: 11,
      name: "Wolfie",
    },
    {
      id: 3,
      specie: "Wild",
      age: 11,
      name: "Alpha",
    },
    {
      id: 4,
      specie: "Wild",
      age: 11,
      name: "Luna",
    },
    {
      id: 5,
      specie: "Wild",
      age: 11,
      name: "Shadow",
    },
    {
      id: 6,
      specie: "Wild",
      age: 11,
      name: "Fang",
    },
    {
      id: 7,
      specie: "Wild",
      age: 11,
      name: "Blaze",
    },
    {
      id: 8,
      specie: "Wild",
      age: 11,
      name: "Ghost",
    },
    {
      id: 9,
      specie: "Wild",
      age: 11,
      name: "Silver",
    },
    {
      id: 10,
      specie: "Wild",
      age: 11,
      name: "Hunter",
    },
    {
      id: 11,
      specie: "Wild",
      age: 11,
      name: "Spirit",
    },
    {
      id: 12,
      specie: "Wild",
      age: 11,
      name: "Storm",
    },
    {
      id: 13,
      specie: "Wild",
      age: 11,
      name: "Midnight",
    },
    {
      id: 14,
      specie: "Wild",
      age: 11,
      name: "Shadowfang",
    },
    {
      id: 15,
      specie: "Wild",
      age: 11,
      name: "Night",
    },
    {
      id: 16,
      specie: "Wild",
      age: 11,
      name: "Whisper",
    },
  ];


  const getAllAnimals = (req, res) => {
    const { page = 1, take = 5 } = req.query;
    take > 10 ? (take = 10) : take;
    res.json(animals.slice((page - 1) * take, page * take));
  }

  const getById = (req, res) => {
    const { id } = req.params;
    const FindAnimalById = animals.find((el) => el.id === Number(id));
    if (!FindAnimalById) {
      return res.status(404).json({ message: "Not Found", data: null });
    }
    res.json({ message: "Find Successfully", data: FindAnimalById });
  }


  const addItem = (req, res) => {
    const { specie, age, name } = req.body;
    if (!age || !specie) {
      return res
        .status(400)
        .json({ message: "Age and Specie is Requires", data: null });
    }
    const lastId = animals[animals.length - 1]?.id || 0;
    const newAnimalObject = {
      id: lastId + 1,
      specie,
      age,
      name,
    };
    animals.push(newAnimalObject);
    res.json({ message: "Created Successfully", data: animals });
  }

  const deleteItem =  (req, res) => {
    const { id } = req.params;
    const FindByIdAndDelete = animals.findIndex((el) => el.id === Number(id));
    if (FindByIdAndDelete === -1) {
      return res.status(400).json({ message: "Animal Not Found", data: null });
    }
    const deletedAnimals = animals.splice(FindByIdAndDelete, 1);
    res.json({ message: "Deleted Successfully", data: deletedAnimals });
  }


  const updateItem =  (req, res) => {
    const { id } = req.params;
    const { specie, age, name } = req.body;
  
    const index = animals.findIndex((el) => el.id === Number(id));
  
    if (index === -1) {
      return res.status(400).json({ message: "Animal Not Found", data: null });
    }
  
    animals[index] = {
      ...animals[index],
      age: age || animals[index].age,
      name: name || animals[index].name,
      specie: specie || animals[index].specie,
    };
    res.json({ message: "Updated Successfully", data: animals });
  }

  module.exports = {getAllAnimals,getById,addItem,deleteItem,updateItem}