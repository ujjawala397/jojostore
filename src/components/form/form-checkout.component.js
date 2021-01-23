import React from 'react';
const Form =()=>{
    return(
    <div>
        <form>
            <div>
                <div class="form-group row justify-content-center">

                    <div class="col-sm-6">

                        <input type="text" class="form-control" id="phone" name="phone" placeholder="Receiver's Name" />
                    </div>
                </div>
                <div class="form-group row justify-content-center">

                    <div class="col-sm-6">

                        <input type="number" class="form-control" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Mobile Number" />
                    </div>
                </div>
                <div class="form-group row justify-content-center">

                    <div class="col-sm-6">
                        <input type="tel" class="form-control" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Alternate Number" />
                    </div>
                </div>
                <div class="form-group row justify-content-center">

                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="inputPassword" placeholder="House / Flat Number" />
                    </div>
                </div>
                <div class="form-group row justify-content-center">

                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="inputPassword" placeholder="Area, Colony, Street Name" />
                    </div>
                </div>
                <div class="form-group row justify-content-center">

                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="inputPassword" placeholder="Landmark" />
                    </div>
                </div>
                <div class="form-group row justify-content-center">

                    <div class="col-sm-4 mb-3">
                        <input type="text" class="form-control" id="inputPassword" placeholder="City" />

                    </div>
                    <div class="col-sm-2">
                        <input type="text" class="form-control" id="inputPassword" placeholder="Pincode" />

                    </div>
                </div>
                <div class="form-group row justify-content-center">

                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="inputPassword" placeholder="Country" />
                    </div>
                </div>
                <div class="form-group row justify-content-center">

                    <div class="col-sm-6">
                <button type="submit" class="form-control btn btn-primary" id="inputPassword">Confirm Details</button>
                </div>
                </div>
            </div>
        </form>
    </div>
    )
}
export default Form;