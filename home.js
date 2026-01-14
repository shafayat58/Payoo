
const TransactionData = [];



// --- Add Money ---
document.getElementById("add-money-submit").addEventListener('click', function (event) {
  event.preventDefault();

  const Bank = document.getElementById('add-bank').value;
  const BankAccountNumber = document.getElementById('add-account-number').value;
  const AddAmount = parseInt(document.getElementById('add-amount').value);
  const PinNumber = document.getElementById('add-pin').value;

  if (BankAccountNumber.length < 11) {
    alert('Provide valid Bank Account Number');
    return;
  }

  if (PinNumber.length < 4) {
    alert('Provide valid Pin Number');
    return;
  }

  const AvailableBalance = parseInt(document.getElementById('available-balance').innerText);
  const updateAmount = AvailableBalance + AddAmount;
  document.getElementById('available-balance').innerText = updateAmount;
  const Data = {
    name: 'Add Money',
    date:new Date().toLocaleTimeString()
  }
  TransactionData.push(Data)
  // console.log(TransactionData);
  

});

// --- Cash Out ---
document.getElementById("cashout-submit").addEventListener('click', function (event) {
  event.preventDefault();

  const AgentNumber = document.getElementById('cashout-agent-number').value;
  const WithdrawAmount = parseInt(document.getElementById('cashout-amount').value);
  const PinNumber = document.getElementById('cashout-pin').value;

  if (AgentNumber.length < 11) {
    alert('Provide valid Agent Number');
    return;
  }

  if (PinNumber.length < 4) {
    alert('Provide valid Pin Number');
    return;
  }
  

  const AvailableBalance = parseInt(document.getElementById('available-balance').innerText.replace(',', ''));
  const updateAmount = AvailableBalance - WithdrawAmount;
  document.getElementById('available-balance').innerText = updateAmount;
  const Data = {
    name: 'Cash Out',
    date: new Date().toLocaleTimeString()
  }
  TransactionData.push(Data)
});

// --- Transfer Money ---
document.getElementById("transfer-submit").addEventListener('click', function (event) {
  event.preventDefault();

  const AccountNumber = document.getElementById('transfer-account-number').value;
  const TransferAmount = parseInt(document.getElementById('transfer-amount').value);
  const PinNumber = document.getElementById('transfer-pin').value;

  if (AccountNumber.length < 11) {
    alert('Provide valid Account Number');
    return;
  }

  if (PinNumber.length < 4) {
    alert('Provide valid Pin Number');
    return;
  }

  const AvailableBalance = parseInt(document.getElementById('available-balance').innerText);
  const updateAmount = AvailableBalance - TransferAmount;
  document.getElementById('available-balance').innerText = updateAmount;
  const Data = {
    name: 'Transfer Money',
    date: new Date().toLocaleTimeString()
  }
  TransactionData.push(Data)
});

// --- Get Bonus ---
document.getElementById("bonus-submit").addEventListener('click', function (event) {
  event.preventDefault();

  const Coupon = document.getElementById('bonus-coupon').value;

  if (!Coupon) {
    alert('Enter a valid Coupon');
    return;
  }

  alert('Bonus applied successfully!');
  const Data = {
    name: 'Get Bonus',
    date: new Date().toLocaleTimeString()
  }
  TransactionData.push(Data)
});

// --- Pay Bill ---
document.getElementById("paybill-submit").addEventListener('click', function (event) {
  event.preventDefault();

  const Bank = document.getElementById('paybill-bank').value;
  const AccountNumber = document.getElementById('paybill-account-number').value;
  const PayAmount = parseInt(document.getElementById('paybill-amount').value);
  const PinNumber = document.getElementById('paybill-pin').value;

  if (AccountNumber.length < 11) {
    alert('Provide valid Account Number');
    return;
  }

  if (PinNumber.length < 4) {
    alert('Provide valid Pin Number');
    return;
  }

  const AvailableBalance = parseInt(document.getElementById('available-balance').innerText);
  const updateAmount = AvailableBalance - PayAmount;
  document.getElementById('available-balance').innerText = updateAmount;
  const Data = {
    name: 'Pay Bill',
    date: new Date().toLocaleTimeString()
  }
  TransactionData.push(Data)
});


// Transaction 

// document.getElementById("transaction-card").addEventListener('click', function (event) {
//   event.preventDefault()
  

// })





// --- Toggle Sections ---
document.getElementById("add-money-card").addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('add-money-section').style.display = 'block';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('getbonus-money-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transaction-section').style.display = 'none';
  

  const cards = document.getElementsByClassName('from-btn');

  for (const btn of cards) {
    
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-green-500", "bg-white");
  }

 
  this.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  this.classList.remove("border-green-500", "bg-white");
  
  
});

document.getElementById("cashout-card").addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('cash-out-section').style.display = 'block';
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('getbonus-money-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transaction-section').style.display = 'none';

  const cards = document.getElementsByClassName('from-btn');

  for (const btn of cards) {
    
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-green-500", "bg-white");
  }

  
  this.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  this.classList.remove("border-green-500", "bg-white");
});

document.getElementById("transfer-card").addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('transfer-money-section').style.display = 'block';
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('getbonus-money-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transaction-section').style.display = 'none';

  const cards = document.getElementsByClassName('from-btn');

  for (const btn of cards) {
    
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-green-500", "bg-white");
  }

  
  this.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  this.classList.remove("border-green-500", "bg-white");
  

  
});

document.getElementById("bonus-card").addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('getbonus-money-section').style.display = 'block';
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transaction-section').style.display = 'none';

  const cards = document.getElementsByClassName('from-btn');

  for (const btn of cards) {
   
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-green-500", "bg-white");
  }

  
  this.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  this.classList.remove("border-green-500", "bg-white");
  
});

document.getElementById("paybill-card").addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('pay-bill-section').style.display = 'block';
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('getbonus-money-section').style.display = 'none';
  document.getElementById('transaction-section').style.display = 'none';

  const cards = document.getElementsByClassName('from-btn');

  for (const btn of cards) {
    
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-green-500", "bg-white");
  }

  
  this.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  this.classList.remove("border-green-500", "bg-white");

  
});



document.getElementById("transaction-card").addEventListener('click', function (event) {
  event.preventDefault();
  // --- Add Money ---
  document.getElementById("add-money-submit").addEventListener('click', function (event) {
    event.preventDefault();

    const Bank = document.getElementById('add-bank').value;
    const BankAccountNumber = document.getElementById('add-account-number').value;
    const AddAmount = parseInt(document.getElementById('add-amount').value);
    const PinNumber = document.getElementById('add-pin').value;

    if (BankAccountNumber.length < 11) {
      alert('Provide valid Bank Account Number');
      return;
    }

    if (PinNumber.length < 4) {
      alert('Provide valid Pin Number');
      return;
    }

    const AvailableBalance = parseInt(document.getElementById('available-balance').innerText);
    const updateAmount = AvailableBalance + AddAmount;
    document.getElementById('available-balance').innerText = updateAmount;
  });

  // --- Cash Out ---
  document.getElementById("cashout-submit").addEventListener('click', function (event) {
    event.preventDefault();

    const AgentNumber = document.getElementById('cashout-agent-number').value;
    const WithdrawAmount = parseInt(document.getElementById('cashout-amount').value);
    const PinNumber = document.getElementById('cashout-pin').value;

    if (AgentNumber.length < 11) {
      alert('Provide valid Agent Number');
      return;
    }

    if (PinNumber.length < 4) {
      alert('Provide valid Pin Number');
      return;
    }

    const AvailableBalance = parseInt(document.getElementById('available-balance').innerText);
    const updateAmount = AvailableBalance - WithdrawAmount;
    document.getElementById('available-balance').innerText = updateAmount;
  });

  // --- Transfer Money ---
  document.getElementById("transfer-submit").addEventListener('click', function (event) {
    event.preventDefault();

    const AccountNumber = document.getElementById('transfer-account-number').value;
    const TransferAmount = parseInt(document.getElementById('transfer-amount').value);
    const PinNumber = document.getElementById('transfer-pin').value;

    if (AccountNumber.length < 11) {
      alert('Provide valid Account Number');
      return;
    }

    if (PinNumber.length < 4) {
      alert('Provide valid Pin Number');
      return;
    }

    const AvailableBalance = parseInt(document.getElementById('available-balance').innerText);
    const updateAmount = AvailableBalance - TransferAmount;
    document.getElementById('available-balance').innerText = updateAmount;
  });

  // --- Get Bonus ---
  document.getElementById("bonus-submit").addEventListener('click', function (event) {
    event.preventDefault();

    const Coupon = document.getElementById('bonus-coupon').value;

    if (!Coupon) {
      alert('Enter a valid Coupon');
      return;
    }

    alert('Bonus applied successfully!');
  });

  // --- Pay Bill ---
  document.getElementById("paybill-submit").addEventListener('click', function (event) {
    event.preventDefault();

    const Bank = document.getElementById('paybill-bank').value;
    const AccountNumber = document.getElementById('paybill-account-number').value;
    const PayAmount = parseInt(document.getElementById('paybill-amount').value);
    const PinNumber = document.getElementById('paybill-pin').value;

    if (AccountNumber.length < 11) {
      alert('Provide valid Account Number');
      return;
    }

    if (PinNumber.length < 4) {
      alert('Provide valid Pin Number');
      return;
    }

    const AvailableBalance = parseInt(document.getElementById('available-balance').innerText);
    const updateAmount = AvailableBalance - PayAmount;
    document.getElementById('available-balance').innerText = updateAmount;
  });


  // Transaction 

  document.getElementById("transaction-card").addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('transaction-section').style.display = 'block';

  })



  document.getElementById('transaction-card').addEventListener('click', function () {
    
    const transactionContainer = document.getElementById('transactionContainer');
    // console.log(TransactionData);
    transactionContainer.innerText = "";

    for (const data of TransactionData) {
      const div = document.createElement('div');

      div.className = "flex justify-between items-center mt-3";

      div.innerHTML = `
    <!-- Left side -->
    <div class="flex items-center gap-3">
      <img src="./assets/wallet1.png"
           class="h-[50px] w-[50px] rounded-full p-3 bg-gray-100">

      <div>
        <p class="font-semibold">${data.name}</p>
        <p class="text-sm text-gray-500">${data.date}</p>
      </div>
    </div>

    <!-- Right side dot -->
    <i class="fa-solid fa-ellipsis-vertical text-xl cursor-pointer"></i>
  `;

      transactionContainer.appendChild(div);
    }

    
       
  })





  // --- Toggle Sections ---
  document.getElementById("add-money-card").addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('getbonus-money-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';


    const cards = document.getElementsByClassName('from-btn');

    for (const btn of cards) {

      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-green-500", "bg-white");
    }


    this.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
    this.classList.remove("border-green-500", "bg-white");


  });

  document.getElementById("cashout-card").addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('cash-out-section').style.display = 'block';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('getbonus-money-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';

    const cards = document.getElementsByClassName('from-btn');

    for (const btn of cards) {

      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-green-500", "bg-white");
    }


    this.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
    this.classList.remove("border-green-500", "bg-white");
  });

  document.getElementById("transfer-card").addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('transfer-money-section').style.display = 'block';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('getbonus-money-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';

    const cards = document.getElementsByClassName('from-btn');

    for (const btn of cards) {

      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-green-500", "bg-white");
    }


    this.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
    this.classList.remove("border-green-500", "bg-white");



  });

  document.getElementById("bonus-card").addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('getbonus-money-section').style.display = 'block';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';

    const cards = document.getElementsByClassName('from-btn');

    for (const btn of cards) {

      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-green-500", "bg-white");
    }


    this.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
    this.classList.remove("border-green-500", "bg-white");

  });

  document.getElementById("paybill-card").addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('pay-bill-section').style.display = 'block';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('getbonus-money-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';

    const cards = document.getElementsByClassName('from-btn');

    for (const btn of cards) {

      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-green-500", "bg-white");
    }


    this.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
    this.classList.remove("border-green-500", "bg-white");


  });



  document.getElementById("transaction-card").addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('transfer-money-section').style.display = 'none';
    document.getElementById('getbonus-money-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'block';


    const cards = document.getElementsByClassName('from-btn');

    for (const btn of cards) {

      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-green-500", "bg-white");
    }


    this.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
    this.classList.remove("border-green-500", "bg-white");


  });

  

  const cards = document.getElementsByClassName('from-btn');

  for (const btn of cards) {
    
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-green-500", "bg-white");
  }

  
  this.classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  this.classList.remove("border-green-500", "bg-white");

  
});
