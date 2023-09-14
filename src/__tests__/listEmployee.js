import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import ListEmployee from "../Pages/ListEmployee/ListEmployee";
import Table from "../Components/Table/Table";
import { Provider } from "react-redux";

import store from "../Redux/store";

const renderWithProvider = (component) => {
  render(<Provider store={store}>{component}</Provider>);
};
//@TODO : Mettre en place un fichier de mock pour les données.
const mockEmployees = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    startDate: "2020-01-01",
    street: "1 rue de la paix",
    city: "Paris",
    state: "France",
    zipCode: "75000",
    department: "IT",
  },
  {
    id: 2,
    firstName: "Ilane",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    startDate: "2020-01-01",
    street: "1 rue de la paix",
    city: "Paris",
    state: "France",
    zipCode: "75000",
    department: "IT",
  },
  {
    id: 3,
    firstName: "Johny",
    lastName: "Smith",
    dateOfBirth: "1990-01-01",
    startDate: "2020-01-01",
    street: "1 rue de la paix",
    city: "Paris",
    state: "France",
    zipCode: "75000",
    department: "IT",
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Johnson",
    dateOfBirth: "1985-02-15",
    startDate: "2019-03-10",
    street: "123 Main Street",
    city: "New York",
    state: "USA",
    zipCode: "10001",
    department: "HR",
  },
  {
    id: 5,
    firstName: "Bob",
    lastName: "Williams",
    dateOfBirth: "1988-07-20",
    startDate: "2017-09-05",
    street: "456 Elm Street",
    city: "Los Angeles",
    state: "USA",
    zipCode: "90001",
    department: "Marketing",
  },
  {
    id: 6,
    firstName: "Emma",
    lastName: "Brown",
    dateOfBirth: "1992-12-05",
    startDate: "2018-10-15",
    street: "789 Oak Street",
    city: "Chicago",
    state: "USA",
    zipCode: "60001",
    department: "Finance",
  },
  {
    id: 7,
    firstName: "James",
    lastName: "Taylor",
    dateOfBirth: "1983-03-30",
    startDate: "2016-07-01",
    street: "101 Pine Street",
    city: "San Francisco",
    state: "USA",
    zipCode: "94101",
    department: "Sales",
  },
  {
    id: 8,
    firstName: "Olivia",
    lastName: "Davis",
    dateOfBirth: "1995-05-10",
    startDate: "2015-04-20",
    street: "222 Cedar Street",
    city: "Houston",
    state: "USA",
    zipCode: "77001",
    department: "Customer Support",
  },
  {
    id: 9,
    firstName: "Michael",
    lastName: "Johnson",
    dateOfBirth: "1980-09-25",
    startDate: "2014-12-10",
    street: "333 Birch Street",
    city: "Miami",
    state: "USA",
    zipCode: "33101",
    department: "Engineering",
  },
  {
    id: 10,
    firstName: "Sophia",
    lastName: "Martinez",
    dateOfBirth: "1991-11-12",
    startDate: "2013-02-28",
    street: "444 Maple Street",
    city: "Dallas",
    state: "USA",
    zipCode: "75201",
    department: "Product Development",
  },
  {
    id: 11,
    firstName: "David",
    lastName: "Brown",
    dateOfBirth: "1987-04-18",
    startDate: "2012-05-15",
    street: "555 Walnut Street",
    city: "Atlanta",
    state: "USA",
    zipCode: "30301",
    department: "Sales",
  },
  {
    id: 12,
    firstName: "Emily",
    lastName: "Smith",
    dateOfBirth: "1993-08-25",
    startDate: "2011-03-20",
    street: "666 Oak Avenue",
    city: "Seattle",
    state: "USA",
    zipCode: "98101",
    department: "Marketing",
  },
  {
    id: 13,
    firstName: "William",
    lastName: "Wilson",
    dateOfBirth: "1986-01-12",
    startDate: "2010-09-30",
    street: "777 Elm Avenue",
    city: "Boston",
    state: "USA",
    zipCode: "02201",
    department: "Finance",
  },
  {
    id: 14,
    firstName: "Ella",
    lastName: "Johnson",
    dateOfBirth: "1994-06-08",
    startDate: "2009-12-05",
    street: "888 Cedar Avenue",
    city: "Denver",
    state: "USA",
    zipCode: "80201",
    department: "Customer Support",
  },
  {
    id: 15,
    firstName: "Liam",
    lastName: "Thomas",
    dateOfBirth: "1989-03-05",
    startDate: "2008-06-10",
    street: "999 Birch Avenue",
    city: "Phoenix",
    state: "USA",
    zipCode: "85001",
    department: "Engineering",
  },
];

const headers = [
  { name: "First Name", data: "firstName" },
  { name: "Last Name", data: "lastName" },
  { name: "Start Date", data: "startDate" },
  { name: "Department", data: "department" },
  { name: "Date of Birth", data: "dateOfBirth" },
  { name: "Street", data: "street" },
  { name: "City", data: "city" },
  { name: "State", data: "state" },
  { name: "Zip Code", data: "zipCode" },
];

describe("En tant qu'employer je veux accéder a la page ListEmployee", () => {
  test('ÉTANT DONNÉ que la page ListEmployee est rendue, QUAND le titre de la page est vérifié, ALORS le titre devrait être "List Employee"', () => {
    renderWithProvider(<ListEmployee />);
    expect(screen.getByText(/List Employee/i)).toBeInTheDocument();
  });

  test("ÉTANT DONNÉ que la page ListEmployee est rendue, QUAND le tableau est vérifié, ALORS tous les champs du tableau devraient être présents", () => {
    renderWithProvider(<ListEmployee />);

    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Date of Birth/i)).toBeInTheDocument();
    expect(screen.getByText(/Start Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Street/i)).toBeInTheDocument();
    expect(screen.getByText(/City/i)).toBeInTheDocument();
    expect(screen.getByText(/State/i)).toBeInTheDocument();
    expect(screen.getByText(/Zip Code/i)).toBeInTheDocument();
    expect(screen.getByText(/Department/i)).toBeInTheDocument();
  });
});

describe("En tant qu'employer je veux effectuer une recherche, Afin de trouver un employé plus rapidement dans le tableau", () => {
  test("Étant donné que le tableau est rendu, Quand on effectue une recherche seul les employés qui corresponde a la saisie son visible", () => {
    render(<Table data={mockEmployees} headers={headers} />);

    // Initialement, toutes les données doivent être affichées
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Johny")).toBeInTheDocument();

    // Tapez une requête de recherche dans l'entrée de recherche pour filtrer les données
    const searchInput = screen.getByLabelText("Search");
    fireEvent.change(searchInput, { target: { value: "Ilane" } });

    // Seul "Ilane" doit être affiché
    expect(screen.getByText("Ilane")).toBeInTheDocument();

    // "John" et "Johny" ne doivent pas être affichés
    expect(screen.queryByText("John")).not.toBeInTheDocument();
    expect(screen.queryByText("Johny")).not.toBeInTheDocument();

    // Effacez l'entrée de recherche pour afficher à nouveau toutes les données
    fireEvent.change(searchInput, { target: { value: "" } });

    // "John", "Johny", "Ilane" doivent être affichés à nouveau
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Johny")).toBeInTheDocument();
    expect(screen.getByText("Ilane")).toBeInTheDocument();
  });
});

describe("En tant qu'employer je veux effectuer un tri par le nombre d'éléments a afficher, Afin de contrôler le nombre d'éléments a afficher", () => {
  test("Étant donné que le tableau est rendu, Quand on effectue un tri par le nombre d'éléments sélectionner a afficher, ALORS le nombre d'éléments a afficher doit être égale au nombre d'éléments a afficher", () => {
    render(<Table data={mockEmployees} headers={headers} />);
    // Sélectionnez l'élément de select par son attribut
    const selectElement = screen.getByTestId("numberShow");
    // Vérifiez que l'élément select est présent dans le DOM
    expect(selectElement).toBeInTheDocument();
    // Sélectionnez une option dans le select en utilisant fireEvent
    fireEvent.change(selectElement, { target: { value: "10" } });
    // Vérifiez que la valeur sélectionnée a été mise à jour
    expect(selectElement.value).toBe("10");

    //On affiche les 10 premiers éléments du tableau mockEmployees uniquement.
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Ilane")).toBeInTheDocument();
    expect(screen.getByText("Johny")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Emma")).toBeInTheDocument();
    expect(screen.getByText("James")).toBeInTheDocument();
    expect(screen.getByText("Olivia")).toBeInTheDocument();
    expect(screen.getByText("Michael")).toBeInTheDocument();
    expect(screen.getByText("Sophia")).toBeInTheDocument();

    // On vérifie que le 11ᵉ élément n'est pas affichée
    expect(screen.queryByText("David")).not.toBeInTheDocument();
  });
});

describe("En tant qu'employer je veux effectuer un tri par ordre alphabétique, Afin de contrôler l'ordre d'affichage des éléments", () => {
  test("Étant donné que le tableau est bien rendu, Quand je clique sur le trie ce la doit trier par nom croissant", async () => {
    render(<Table data={mockEmployees} headers={headers} />);

    fireEvent.click(screen.getByText("First Name"));
    // Récupérer les valeurs des éléments triés (First Name)
    const sortedData = [...mockEmployees].sort((a, b) =>
      a.firstName.localeCompare(b.firstName),
    );
    // Récupérer les valeurs triées
    const sortedDataValues = sortedData
      .map((element) => element.firstName)
      .slice(0, 10);
    // Vérifier que toutes les valeurs triées sont présentes
    const sortedValuesVerif = screen.getAllByTestId("arrayData");
    const compareValueSorted = [];
    sortedValuesVerif.forEach((element) => {
      compareValueSorted.push(element.textContent);
    });
    expect(sortedDataValues).toEqual(compareValueSorted);
  });

  test("Étant donné que le tableau est bien rendu, Quand je clique sur le trie ce la doit trier par nom décroissant", () => {
    render(<Table data={mockEmployees} headers={headers} />);
    fireEvent.click(screen.getByText("First Name"));
    fireEvent.click(screen.getByText("First Name"));
    const sortedData = [...mockEmployees].sort((a, b) =>
      b.firstName.localeCompare(a.firstName),
    );
    // Récupérer les valeurs triées
    const sortedDataValues = sortedData
      .map((element) => element.firstName)
      .slice(0, 10);

    const sortedValuesVerif = screen.getAllByTestId("arrayData");
    const compareValueSorted = [];
    sortedValuesVerif.forEach((element) => {
      compareValueSorted.push(element.textContent);
    });
    // Vérifier que toutes les valeurs triées sont présentes
    expect(sortedDataValues).toEqual(compareValueSorted);
  });
});
//pagination next et previous
describe("En tant qu'employer je veux effectuer une pagination, Afin de pouvoir naviguer entre les différentes pages", () => {
  test("Étant donné que le tableau est rendu, lorsque je clic sur les boutons next ou prev cela devrais afficher les autres elements du tableau ou de ré afficher les elements", () => {
    // On rend le composant Table avec les données mockEmployees et les headers
    render(<Table data={mockEmployees} headers={headers} />);
    // On vérifie si les 10 premiers éléments du tableau mockEmployees sont affichées
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Ilane")).toBeInTheDocument();
    expect(screen.getByText("Johny")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Emma")).toBeInTheDocument();
    expect(screen.getByText("James")).toBeInTheDocument();
    expect(screen.getByText("Olivia")).toBeInTheDocument();
    expect(screen.getByText("Michael")).toBeInTheDocument();
    expect(screen.getByText("Sophia")).toBeInTheDocument();
    // On simule le click sur le bouton next pour afficher les 10 éléments suivant
    fireEvent.click(screen.getByText("Next"));
    // On vérifie que le 11 au 15 élément est affichée
    expect(screen.getByText("David")).toBeInTheDocument();
    expect(screen.getByText("Emily")).toBeInTheDocument();
    expect(screen.getByText("William")).toBeInTheDocument();
    expect(screen.getByText("Ella")).toBeInTheDocument();
    //on vérifie que le 1 premier élément ne sois plus affichée
    expect(screen.queryByText("John")).not.toBeInTheDocument();

    // On simule le click sur le bouton previous pour afficher les 10 éléments précédent
    fireEvent.click(screen.getByText("Previous"));
    // On vérifie que le 1 au 10 élément est affichée
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Ilane")).toBeInTheDocument();
    expect(screen.getByText("Johny")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Emma")).toBeInTheDocument();
    expect(screen.getByText("James")).toBeInTheDocument();
    expect(screen.getByText("Olivia")).toBeInTheDocument();
    expect(screen.getByText("Michael")).toBeInTheDocument();
    expect(screen.getByText("Sophia")).toBeInTheDocument();
    //on vérifie que le 11 premier élément ne sois plus affichée
    expect(screen.queryByText("David")).not.toBeInTheDocument();
  });
});
