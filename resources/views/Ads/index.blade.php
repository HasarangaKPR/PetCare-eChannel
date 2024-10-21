@extends('Layouts.frontend')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Pet Ads
                            <a href="{{url('Ads/create')}}" class="btn btn-primary float-end">Create Ad</a>
                        </h4>   
                    </div>
                    <div class="card-body">
                        <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>AdId</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>breed</th>
                                    <th>description</th>
                                    <th>contactnumber</th>
                                    <th>price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection