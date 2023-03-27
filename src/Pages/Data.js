import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import '../Style.css';

export default function DataTable() {
  const data = [    ["Dept", "Degr", "Major Code", "Major Name", "Conc Code", "Concentration Name (if any)", "Freshman", "Sophomore", "Junior", "Senior", "NDEG UGrad", "Total UGrad", "Grad I (master)", "Grad II (doctoral)", "NDEG Grad", "Total Grad",      "Professional", "Total Students", "Academic Program Code"],
    ["434", "BS", "112", "Computer Science", "", "", "77", "218", "301", "474", "0", "1070", "0", "0", "0", "0", "0", "1070", "10KP0112BS"],
    ["434", "BS", "112", "Computer Science", "1854", "CS:BS/MS Program", "0", "0", "0", "23", "0", "23", "0", "0", "0", "0", "0", "23", "10KP1854BS"],
    ["434", "BS", "112", "Computer Science", "5458", "BS/MCS Computer Science", "0", "0", "0", "12", "0", "12", "0", "0", "0", "0", "0", "12", "10KP5458BS"],
["434", "MCS", "112", "Computer Science", "", "", "0", "0", "0", "0", "0", "0", "64", "0", "0", "64", "0", "64", "10KS0112MCS"],
["434", "MCS", "112", "Computer Science", "", "", "0", "0", "0", "0", "0", "0", "1", "0", "0", "1", "0", "1", "10KS0112MCSU"],
["434", "MCS", "112", "Computer Science", "", "", "0", "0", "0", "0", "0", "0", "125", "0", "0", "125", "0", "125", "1SKS0112MCSU"],
["434", "MCS", "112", "Computer Science", "5458", "BS/MCS Computer Science", "0", "0", "0", "0", "0", "0", "14", "0", "0", "14", "0", "14", "10KS5458MCS"],
["434", "MS", "112", "Computer Science", "", "", "0", "0", "0", "0", "0", "0", "98", "0", "0", "98", "0", "98", "10KS0112MS"],
["434", "MS", "112", "Computer Science", "1854", "CS:BS/MS Program", "0", "0", "0", "0", "0", "0", "21", "0", "0", "21", "0", "21", "10KS1854MS"],
["434", "MS", "4026", "Bioinformatics", "4028", "Computer Science", "0", "0", "0", "0", "0", "0", "5", "0", "0", "5", "0", "5", "10KS4028MS"],
["434", "PHD", "112", "Computer Science", "", "", "0", "0", "0", "0", "0", "319", "0", "0", "319", "0", "319", "","10KS0112PHD"],
["434", "PHD", "112", "Computer Science", "5511", "Computational Sci & Engr", "0", "0", "0", "0", "0", "0", "0", "1", "0", "1", "0", "1", "10KS0112PHD"],
  ];

  const columnWidths = ["10%", "10%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%", "20%","20%", "20%", "20%", "20%", "20%", "20%"];
  const rowHeight = "70px";

  return (
    <div class="container" >
<Table variant="striped" colorScheme="teal" width="100%" my={4} border="1px solid gray" borderRadius="lg">
      <Thead>
        <Tr height={rowHeight} >
          {data[0].map((column, index) => (
            <Th key={index} width={columnWidths[index]}>
              {column}
            </Th>
))}
</Tr>
</Thead>
<Tbody>
{data.slice(1).map((row, index) => (
<Tr key={index} height={rowHeight}>
{row.map((cell, index) => (
<Td key={index} width={columnWidths[index]}>
{cell}
</Td>
))}
</Tr>
))}
</Tbody>
</Table>
</div>
);
}






