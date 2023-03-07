class customer {
    constructor(id, fullname, email, phone, address) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}

let customers = []
function init() {
    customers = [
        new customer(1, "Nguyen Van A", "nva@gmail.com", 0111222333, "28 Nguyen Tri Phuong"),
        new customer(2, "Nguyen Van B", "nvb@gmail.com", 0112345444, "29 Nguyen Tri Phuong"),
        new customer(3, "Nguyen Van C", "nvc@gmail.com", 0112345445, "30 Nguyen Tri Phuong")

    ]
}

function renderCustomer() {
    let data = customers;
    let htmls = data.map(function (customer) {
        return `
        <tr>
        <td class="text-center">${customer.id}</td>
        <td class="text-center">${customer.fullname}</td>
        <td class="text-center">${customer.email}</td>
        <td class="text-center">${customer.phone}</td>
        <td class="text-center">${customer.address}</td>
        <td class="text-center">
          <button class="btn btn btn-outline-primary" title="Edit" data-toggle="tooltip"
            data-bs-original-title="Edit" data-bs-toggle="modal" data-bs-target="#editModal" onclick="showUpdate(${customer.id})">
            Edit
          </button>
          <button type="button" class="btn btn-outline-danger" title="Delete" data-toggle="tooltip"
            data-bs-original-title="Delete" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="showRemove(${customer.id})">
            Delete
          </button>
        </td>
      </tr>
        `
    })
    document.getElementById("tbcustomer").innerHTML = htmls.join("");
}

function findMaxId() {
  let max = 0;
  for (let customer of customers) {
      if (customer.id > max) {
          max = customer.id;
      }
  }
  return max;
}


function addCustomer() {
    let fullname = document.querySelector("#fullName").value;
    if (!error(fullname)) {
      alert(" Please enter fullname!")
      return;
  }
    let email = document.querySelector("#email").value;
    if (!error(email)) {
      alert(" Please enter Email!")
      return;
  }
    let phone = document.querySelector("#phone").value;
    if (!error(phone)) {
      alert(" Please enter Phone!")
      return;
  }
    let address = document.querySelector("#address").value;
    if (!error(address)) {
      alert(" Please enter Address!")
      return;
  }
    let id = findMaxId() + 1;
    let newCustomer = new customer(id, fullname, email, phone, address);
    customers.push(newCustomer);
    renderCustomer();
    resetForm();
}

function resetForm() {
    document.querySelector("#fullName").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#address").value = "";
}

function error(field) {
  return field != null && field.trim() != '';
}

function getproductbyid(id) {
    return customers.find(function (cus1) {
        return cus1.id == id;
    })
}
function showUpdate(customerid) {
    let customer = getproductbyid(customerid);
    console.log("change");
    console.log(customer);
    let htmls = 
    `<div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Customer</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6">
                        <label class="">FullName</label>
                        <input class="col-md-12 form-control" type="text"/ value="${customer.fullname}" id="fullname">
                    </div>
                    <div class="col-md-6">
                        <label class="">Email</label>
                        <input class="col-md-12 form-control" type="email"/ value="${customer.email}" id="emailUpdate">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label class="">Phone</label>
                        <input class="col-md-12 form-control" type="text"/ value="${customer.phone}" id="phoneUpdate">
                    </div>
                    <div class="col-md-6">
                        <label class="">Address</label>
                        <input class="col-md-12 form-control" type="text"/ value="${customer.address}" id="addressUpdate">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-outline-primary" onclick="update(${customer.id})">Save changes</button>
            </div>
        </div>
    </div>`
    document.getElementById("editModal").innerHTML = htmls;
}

function update(customerid) {
    let customer = getproductbyid(customerid);
    console.log("Update");
    console.log(customer);
    let newFullname = document.getElementById("fullname").value;
    if (!error(newFullname)) {
      alert(" Please enter fullname!")
      return;
  }
    console.log(newFullname);
    let newEmail = document.getElementById("emailUpdate").value;
    if (!error(newEmail)) {
      alert(" Please enter Email!")
      return;
  }
    console.log(newEmail);
    let newPhone = document.getElementById("phoneUpdate").value;
    if (!error(newPhone)) {
      alert(" Please enter Phone!")
      return;
  }
    console.log(newPhone);
    let newAddress = document.getElementById("addressUpdate").value;
    if (!error(newAddress)) {
      alert(" Please enter Address!")
      return;
  }
    console.log(newAddress);
    customer.fullname = newFullname;
    customer.email = newEmail;
    customer.phone = newPhone;
    customer.address = newAddress;
    console.log(customer);
    renderCustomer();
}

function showRemove(customerid) {
    let customer = getproductbyid(customerid);
    console.log("remove");
    console.log(customer);
    let htmls = `
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <img class="row" src="/kisspng-computer-icons-vector-graphics-image-icon-design-i-flat-delete-icon-bing-images-5b7b43bf9584a3.3036558615348049276124.jpg" alt="" style="margin:auto; height: 80px;">
        <span>Are you sure you want to delete ${customer.fullname}?</span>
      </div>
      <div class="modal-footer">
        <div style="margin:auto">
          <button type="button" class="btn btn-primary" onclick="remove(${customer.id})">Yes, delete it!</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>`
  document.getElementById("deleteModal").innerHTML = htmls;
}

function remove(customerid){
        let position = customers.findIndex(function (customer) {
            return customer.id == customerid;
        })
        customers.splice(position, 1);
        renderCustomer();
}

function ready() {
    init();
    renderCustomer();
}
ready();
