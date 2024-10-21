@extends('Layouts.frontend')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Pet Ads
                            <a href="{{url('Ads/create')}}" class="btn btn-primary float-end">Back</a>
                        </h4>   
                    </div>
                    <div class="card-body">
                        <form action="{{route('Ads.store')}}" method="post">
                            @csrf
                            <div class="mb-3">
                               <label>Name</label> 
                               <input type="text" name="name" class="form-control">
                            </div>                   
                            <div class="mb-3">
                                <label>Address</label>
                                <textarea name="address"  rows="2" class="form-control"></textarea>
                             </div>
                             <div class="mb-3">
                                <label>Breed</label> 
                                <input type="text" name="breed" class="form-control">
                             </div>
                             <div class="mb-3">
                                <label>Description</label> 
                                <textarea name="description"  rows="3" class="form-control"></textarea>
                             </div>
                             <div class="mb-3">
                                <label>Contact Number</label> 
                                <input type="text" name="number" class="form-control">
                             </div>
                             <div class="mb-3">
                                <label>Price</label> 
                                <input type="text" name="price" class="form-control">
                             </div>
                             <div class="mb-3">
                               <button type="submit" class="btn  btn-primary">Submit</button>
                             </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection