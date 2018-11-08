export default function() {
    return {        
        view() {
            return (
                <div class="row">
                    <div class="col-md-12">
                        <div class="bgc-white bd bdrs-3 p-20 mB-20">
                            <h4 class="c-grey-900 mB-20">Bootstrap Data Table</h4>
                            <div id="dataTable_wrapper" class="dataTables_wrapper">
                                <button type="button" class="btn btn-primary">Primary</button>
                                <div id="dataTable_filter" class="dataTables_filter">
                                    <button type="button" class="btn btn-primary">Primary</button>
                                    <label> 

              Search:
                                        <input type="search" class="" placeholder="" aria-controls="dataTable" />
                                    </label>
                                </div>
                                <table id="dataTable" class="table table-striped dataTable" cellspacing="0" width="100%" role="grid" aria-describedby="dataTable_info" style="width: 100%;">
                                    <thead>
                                        <tr role="row">
                                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 253.5px;">Name</th>
                                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 379.5px;">Position</th>
                                            <th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column descending" style="width: 179.5px;" aria-sort="ascending">Office</th>
                                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" style="width: 53.5px;">Age</th>
                                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style="width: 141.5px;">Start date</th>
                                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 142.5px;">Salary</th></tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th rowspan="1" colspan="1">Name</th>
                                            <th rowspan="1" colspan="1">Position</th>
                                            <th rowspan="1" colspan="1">Office</th>
                                            <th rowspan="1" colspan="1">Age</th>
                                            <th rowspan="1" colspan="1">Start date</th>
                                            <th rowspan="1" colspan="1">Salary</th></tr>
                                    </tfoot>
                                    <tbody>
                                        <tr role="row" class="odd">
                                            <td class="">Unity Butler</td>
                                            <td class="">Marketing Designer</td>
                                            <td class="sorting_1">San Francisco</td>
                                            <td>47</td>
                                            <td>2009/12/09</td>
                                            <td>$85,675</td></tr>
                                        <tr role="row" class="even">
                                            <td class="">Ashton Cox</td>
                                            <td class="">Junior Technical Author</td>
                                            <td class="sorting_1">San Francisco</td>
                                            <td>66</td>
                                            <td>2009/01/12</td>
                                            <td>$86,000</td></tr>
                                        <tr role="row" class="odd">
                                            <td class="">Colleen Hurst</td>
                                            <td class="">Javascript Developer</td>
                                            <td class="sorting_1">San Francisco</td>
                                            <td>39</td>
                                            <td>2009/09/15</td>
                                            <td>$205,500</td></tr>
                                        <tr role="row" class="even">
                                            <td class="">Vivian Harrell</td>
                                            <td class="">Financial Controller</td>
                                            <td class="sorting_1">San Francisco</td>
                                            <td>62</td>
                                            <td>2009/02/14</td>
                                            <td>$452,500</td></tr>
                                        <tr role="row" class="odd">
                                            <td class="">Jonas Alexander</td>
                                            <td class="">Developer</td>
                                            <td class="sorting_1">San Francisco</td>
                                            <td>30</td>
                                            <td>2010/07/14</td>
                                            <td>$86,500</td></tr>
                                        <tr role="row" class="even">
                                            <td class="">Fiona Green</td>
                                            <td class="">Chief Operating Officer (COO)</td>
                                            <td class="sorting_1">San Francisco</td>
                                            <td>48</td>
                                            <td>2010/03/11</td>
                                            <td>$850,000</td></tr>
                                        <tr role="row" class="odd">
                                            <td class="">Doris Wilder</td>
                                            <td class="">Sales Assistant</td>
                                            <td class="sorting_1">Sidney</td>
                                            <td>23</td>
                                            <td>2010/09/20</td>
                                            <td>$85,600</td></tr>
                                        <tr role="row" class="even">
                                            <td class="">Michelle House</td>
                                            <td class="">Integration Specialist</td>
                                            <td class="sorting_1">Sidney</td>
                                            <td>37</td>
                                            <td>2011/06/02</td>
                                            <td>$95,400</td></tr>
                                        <tr role="row" class="odd">
                                            <td class="">Olivia Liang</td>
                                            <td class="">Support Engineer</td>
                                            <td class="sorting_1">Singapore</td>
                                            <td>64</td>
                                            <td>2011/02/03</td>
                                            <td>$234,500</td></tr>
                                        <tr role="row" class="even">
                                            <td class="">Jennifer Chang</td>
                                            <td class="">Regional Director</td>
                                            <td class="sorting_1">Singapore</td>
                                            <td>28</td>
                                            <td>2010/11/14</td>
                                            <td>$357,650</td></tr>
                                    </tbody>
                                </table>
                                <div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 41 to 50 of 57 entries</div>
                                <div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">

                                    <select name="dataTable_length" aria-controls="dataTable" class="">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option></select>

                                    <a class="paginate_button previous" aria-controls="dataTable" data-dt-idx="0" tabindex="0" id="dataTable_previous">Previous</a>
                                    <span>
                                        <a class="paginate_button " aria-controls="dataTable" data-dt-idx="1" tabindex="0">1</a>
                                        <a class="paginate_button " aria-controls="dataTable" data-dt-idx="2" tabindex="0">2</a>
                                        <a class="paginate_button " aria-controls="dataTable" data-dt-idx="3" tabindex="0">3</a>
                                        <a class="paginate_button " aria-controls="dataTable" data-dt-idx="4" tabindex="0">4</a>
                                        <a class="paginate_button current" aria-controls="dataTable" data-dt-idx="5" tabindex="0">5</a>
                                        <a class="paginate_button " aria-controls="dataTable" data-dt-idx="6" tabindex="0">6</a></span>
                                    <a class="paginate_button next" aria-controls="dataTable" data-dt-idx="7" tabindex="0" id="dataTable_next">Next</a></div>
                            </div>
                        </div>
                    </div>
                </div>                
            );
        },
    };
}