const express = require("express");
const app = express();
const corse = require("cors");
const PORT = 3001;
app.use(corse());
app.use(express.json());

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
    name: "Wolf",
  },
  {
    id: 3,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 4,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 5,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 5,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 7,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 8,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 9,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 10,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 11,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 12,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 13,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 14,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 15,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
  {
    id: 16,
    specie: "Wild",
    age: 11,
    name: "Wolf",
  },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/shop/:category/:id", (req, res) => {
  console.log(req.params);
  res.send("shop");
});

app.get("/secret", (req, res) => {
  console.log(req.headers);
  const apiKey = req.headers["api-key"];
  if (!apiKey || apiKey !== "12345") {
    return res.status(403).json({ message: "UnAuth", data: null });
  }
  res.send("secret info");
});

app.get("/api", (req, res) => {
  const { page = 1, take = 5 } = req.query;
  take > 10 ? (take = 10) : take;
  res.json(animals.slice((page - 1) * take, page * take));
});

app.get("/api/:id", (req, res) => {
  const { id } = req.params;
  const FindAnimalById = animals.find((el) => el.id === Number(id));
  if (!FindAnimalById) {
    return res.status(404).json({ message: "Not Found", data: null });
  }
  res.json({ message: "Find Successfully", data: FindAnimalById });
});

app.post("/api", (req, res) => {
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
});

app.delete("/api/:id", (req, res) => {
  const { id } = req.params;
  const FindByIdAndDelete = animals.findIndex((el) => el.id === Number(id));
  if (FindByIdAndDelete === -1) {
    return res.status(400).json({ message: "Animal Not Found", data: null });
  }
  const deletedAnimals = animals.splice(FindByIdAndDelete, 1);
  res.json({ message: "Deleted Successfully", data: deletedAnimals });
});

app.put("/api/:id", (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
