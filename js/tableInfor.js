// import * as $ from 'jquery';
{/* <script
src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
crossorigin="anonymous"
></script> */}

var data1 =
    [
        {
        label: 'Chorme',
        dataSet: [	`10853(52%)`,	`52.80%`	,`566(92%)`]
        }
    ,
    
        {
            label: 'Safari',
            dataSet: [	`2545(47%)`,	`47.54%`,	`498(81%)`]
        },

        {
            label: 'Internet-Explorer',
            dataSet: [	`111(52%)`,	`3.80%`	,`15(86%)`]
        }
    ]
 ;
 var data2 =
    [
        {
        label: 'Javascript',
        dataSet: [	`10853(52%)`,	`52.80%`	,`566(92%)`]
        }
    ,
    
        {
            label: 'Python',
            dataSet: [	`2545(47%)`,	`47.54%`,	`498(81%)`]
        },

        {
            label: 'Java',
            dataSet: [	`111(52%)`,	`3.80%`	,`15(86%)`]
        }
    ]
 ;
 var table1 = $('#table1');
 var table2 = $('#table2');
 
//     table1.append(`<tr>
//     <th scope="row"> Chorme </th>
//     <td>1000</td>
//     <td>1000 </td>
//     <td>600 </td>
//   </tr>`)

$('#table1  > tbody:last-child').append(data1.map(elm => {
    return (
        `<tr>
  <th scope="row">${elm.label} </th>
  <td>${elm.dataSet[0]}</td>
  <td>${elm.dataSet[1]}</td>
  <td>${elm.dataSet[2]}</td>
</tr>`
    )
    
}));

$('#table2  > tbody:last-child').append(data2.map(elm => {
    return (
        `<tr>
  <th scope="row">${elm.label} </th>
  <td>${elm.dataSet[0]}</td>
  <td>${elm.dataSet[1]}</td>
  <td>${elm.dataSet[2]}</td>
</tr>`
    )
    
}));
//     append(
//      `<tr>
//      <th scope="row"> Chorme </th>
//      <td>1000</td>
//      <td>1000 </td>
//      <td>600 </td>
//    </tr>`
//  )