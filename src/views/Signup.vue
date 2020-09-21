<template>
	<div>
        <Navbar />
		<section class="container-fluid registerbar"></section>
		<section class="container-fluid">
			<div class="col-sm-12">
				<div class="register">
					<form class="form">
						<div class="register-form">
							<div class="row">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <div class="inner-addon left-addon">
                                            <i class="fa fa-user"></i>
                                            <input 
												type="text" 
												name="name" 
												id="name" 
												placeholder="Enter your Name" 
												class="form-control" 
												required="required" 
												value="" 
											/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <div class="inner-addon left-addon">
                                            <i class="fa fa-user"></i>
                                            <input 
												type="text" 
												name="sname" 
												id="sname" 
												placeholder="Enter your Surname" class="form-control" 
												required="required" 
												value="" 
											/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <div class="inner-addon left-addon">
                                            <i class="fa fa-list-ul"></i>
                                            <select class="form-control" name="plan" style="height: 45px; padding-top: 10px" required="required">
                                                <option selected="" value="0">Choose Plan</option>
                                                <option value="1">Lite</option>
                                                <option value="2">Pro</option>
                                                <option value="3">Enterprise</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <div class="inner-addon left-addon">
                                            <i class="fa fa-envelope"></i>
                                            <input type="email" name="hmail" id="hmail" value="" class="form-control" placeholder="Enter Email Address" required="required" />
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div class="row">
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <div class="inner-addon left-addon">
                                            <i class="fa fa-key"></i>
                                            <input type="password" name="pswd" id="password" placeholder="Choose Password" class="form-control" required="required" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="inner-addon left-addon">
                                        <i class="fa fa-key"></i>
                                        <input type="password" name="pswdcf" id="password2" placeholder="Re-enter Password" class="form-control" required="required" value="" />
                                    </div>
                                </div>
                            </div>
							<div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="form-group">
										<input type="submit" name="subVerify" class="btn btn-primary btn-block btn-log" value="Get Started" />
                                    </div>
                                </div>
							</div>
						</div>
						<div class="login-footer">
							<div class="col-xs-12">
								<div class="form-group">
									<router-link class="forgot" to="/login"> Login</router-link>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
	name: 'App',
	components: {
		Navbar
	}
}
</script>