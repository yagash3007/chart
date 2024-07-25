// Some DataSets are massive and will bring any web browser to its knees if you
// try to load the entire thing. To keep your app performing optimally, take
// advantage of filtering, aggregations, and group by's to bring down just the
// data your app needs. Do not include all columns in your data mapping file,
// just the ones you need.
//
// For additional documentation on how you can query your data, please refer to
// https://developer.domo.com/docs/dev-studio/dev-studio-data






// chart one
domo.get('/data/v2/TestData?fields=order_status,price&groupby=price&limit=10')
    .then(function(TestData){
      console.log("TestData", TestData);
      TestData.sort((a,b)=>b.order_status-a.seller_state)
      const top =TestData.slice(0,5);

      console.log(top)
      let a=[];
      let b=[];
      for(i=0;i<5;i++){
        a.push(top[i].order_status)
        b.push(top[i]. price)
      }
      console.log(a);
      
     
     var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                
                datasets: [{
                    label: a,
                    data: b,
                    backgroundColor: [
                        `gray`,'yellow','pink','red'
                    ],
                    borderColor: [
                        "transparent",
                    ],
                    borderWidth: 10
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });


    //chart two

    // domo.get('/data/v2/TestData?fields=customer_city,customer_id&groupby=price&limit=10')
    // .then(function(TestData){
    //   console.log("TestData", TestData);
    //   TestData.sort((a,b)=>b.order_status-a.seller_state)
    //   const top =TestData.slice(0,5);

    //   console.log(top)
    //   let a=[];
    //   let b=[];
    //   for(i=0;i<5;i++){
    //     a.push(top[i].customer_city)
    //     b.push(top[i]. customer_id)
    //   }
    //   console.log(a);
      
     
    //  var ctxx = document.getElementById('myChart2').getContext('2d');
    //     var myChart = new Chart(ctxx, {
    //         type: 'line',
    //         data: {
                
    //             datasets: [{
    //                 label: [0,1,2,4,5,6],
    //                 data: [5,10,20,25,30,35],
    //                 backgroundColor: [
    //                     'black'
    //                 ],
    //                 borderColor: [
    //                     "transparent",
    //                 ],
    //                 borderWidth: 5
    //             }]
    //         },
    //         options: {
    //             scales: {
    //                 y: {
    //                     beginAtZero: true
    //                 }
    //             }
    //         }
    //     });
    // });




    domo.get('/data/v2/TestData?fields=order_status,price&groupby=price&limit=10')
    .then(function(TestData){
      console.log("TestData", TestData);
      TestData.sort((a,b)=>b.order_status-a.seller_state)
      const top =TestData.slice(0,5);

      console.log(top)
      let a=[];
      let b=[];
      for(i=0;i<5;i++){
        a.push(top[i].order_status)
        b.push(top[i]. price)
      }
      console.log(a);
      
     
     var ctx = document.getElementById('myChart2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                
                datasets: [{
                    label: a,
                    data: b,
                    backgroundColor: [
                      'Red',
                      'Green',
                      'Yellow',
                      'Grey',
                      'Blue'
                    ],
                    borderColor: [
                        "transparent",
                    ],
                    borderWidth: 10
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });



    //chart 3


    domo.get('/data/v2/TestData?fields=order_delivered_carrier_date,order_delivered_customer_date&groupby=order_delivered_carrier_date&limit=10')
    .then(function(TestData){
      console.log("TestData", TestData);
      TestData.sort((a,b)=>b.order_delivered_carrier_date-a.order_delivered_customer_date)
      const top =TestData.slice(0,5);

      console.log(top)
      let a=[];
      let b=[];
      for(i=0;i<5;i++){
        a.push(top[i].order_delivered_carrier_date)
        b.push(top[i].order_delivered_customer_date)
      }
      console.log(a);
      
     
     var ctx = document.getElementById("myChart3").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Order deliverd',
                    data: b,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });



    //chart 4
    domo.get('/data/v2/TestData?fields=order_status,price&groupby=price&limit=10')
    .then(function(TestData){
      console.log("TestData", TestData);
      TestData.sort((a,b)=>b.order_status-a.seller_state)
      const top =TestData.slice(0,5);

      console.log(top)
      let a=[];
      let b=[];
      for(i=0;i<5;i++){
        a.push(top[i].order_status)
        b.push(top[i]. price)
      }
      console.log(a);
      
     
     var ctx = document.getElementById('myChart4').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                
                datasets: [{
                    label: a,
                    data: b,
                    backgroundColor: [
                        '#1589E1','#C884A6','pink','gray'
                    ],
                    borderColor: [
                        "transparent",
                    ],
                    borderWidth: 10
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });

   