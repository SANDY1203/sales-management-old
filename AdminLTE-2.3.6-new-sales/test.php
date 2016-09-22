<div class="menu_section">
                            <ul class="nav side-menu">
                                <li>
                                    <a ui-sref="app.dashboard" href="#/"><i class="fa fa-home"></i> Dashboard </a>
                                </li>
                                <li>
                                    <a ui-sref="app.games.list" href="#/games"><i class="fa fa-edit"></i> Games <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a ui-sref="app.games.list" href="#/games">List</a></li>
                                        <li><a ui-sref="app.games.create" href="#/games/create">Create New</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a ui-sref="app.shops.list" href="#/shops"><i class="fa fa-desktop"></i> Shops <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a ui-sref="app.shops.list" href="#/shops">List</a></li>
                                        <li><a ui-sref="app.shops.create" href="#/shops/create">Create New</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a ui-sref="app.players.list" href="#/players"><i class="fa fa-desktop"></i> Players <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a ui-sref="app.players.details">Details</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a ui-sref="app.owners.list" href="#/owners"><i class="fa fa-desktop"></i> Owners <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a ui-sref="app.owners.detail">List</a></li>
                                        <li><a ui-sref="app.owners.create" href="#/owners/create">Create New</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a ui-sref="app.employees.list" href="#/employees"><i class="fa fa-desktop"></i> Employees <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a ui-sref="app.employees.list" href="#/employees">List</a></li>
                                        <li><a ui-sref="app.employees.create" href="#/employees/create">Create New</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a ui-sref="app.tournaments.list" href="#/tournaments"><i class="fa fa-table"></i> Tournaments <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a ui-sref="app.tournaments.list" href="#/tournaments">List</a></li>
                                        <li><a ui-sref="app.tournaments.create" href="#/tournaments/create">Create New</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a ui-sref="app.plays.list" href="#/plays"><i class="fa fa-bar-chart-o"></i> Plays <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a ui-sref="app.plays.list" href="#/plays">List</a></li>
                                        <li><a ui-sref="app.plays.create" href="#/plays/create">Create New</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a ui-sref="app.stations.list" href="#/stations"><i class="fa fa-clone"></i> Stations <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a ui-sref="app.stations.list" href="#/stations">List</a></li>
                                        <li><a ui-sref="app.stations.create" href="#/stations/create">Create New</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a ui-sref="app.rates.list" href="#/rates"><i class="fa fa-clone"></i> Rates <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a ui-sref="app.rates.list" href="#/rates">List</a></li>
                                        <li><a ui-sref="app.rates.create" href="#/rates/create">Create New</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
						
						
						
						
						<div class="col-md-5 project_detail">
                                <p class="ng-binding"><span class="title control-label">DOB:</span></p>
                                <p class="ng-binding"><span class="title control-label">Email:</span>denis_mageto@galaxy.com</p>
                                <p class="ng-binding"><span class="title control-label">Phone:</span></p>
                                <p class="ng-binding"><span class="title control-label">Role:</span>owner</p>
                            </div>
							
							
							
							
							
							<div class="x_title">
                <h2 class="green ng-binding">Denis Mageto</h2>
                <ul class="nav navbar-right panel_toolbox">
                    <!-- ngIf: vm.canEdit(vm.user) --><li ng-if="vm.canEdit(vm.user)" class="ng-scope">
                        <button ng-click="vm.delete(vm.user.id)" class="btn btn-danger btn-xs">
                            <i class="fa fa-trash-o"></i> Delete
                        </button>
                    </li><!-- end ngIf: vm.canEdit(vm.user) -->
                    <li>
                        <button ng-click="vm.gotoListView()" class="btn btn-default btn-xs">
                            <i class="fa fa-close"></i> Close
                        </button>
                    </li>
                </ul>
                <div class="clearfix"></div>
            </div>
			
			<div class="x_content">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <br>
                    <!-- main details -->
                    <div id="mainb">
                        <div class="col-md-12">
                            <div class="col-md-7">
                                <!--TODO upload employee images-->
                                <img style="width: 120px; height: 120px" class="img-responsive img-circle" alt="No Image" src="api/avatars/">
                            </div>
                            <div class="col-md-5 project_detail">
                                <p class="ng-binding"><span class="title control-label">DOB:</span></p>
                                <p class="ng-binding"><span class="title control-label">Email:</span>denis_mageto@galaxy.com</p>
                                <p class="ng-binding"><span class="title control-label">Phone:</span></p>
                                <p class="ng-binding"><span class="title control-label">Role:</span>owner</p>
                            </div>
                        </div>
                    </div>
                    <!-- end main details -->

                    <!-- ngIf: vm.user.plays.data -->
                </div>
            </div>