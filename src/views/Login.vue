<template>
	<div>
		<Navbar />
		<section class="container-fluid loginbar"></section>
		<section class="container-fluid">
			<div class="col-sm-12">
				<div class="login">
					<form class="form">
						<div class="login-form">
							<div class="row">
								<div class="col-sm-12">
									<div class="form-group">								
										<div class="inner-addon left-addon">
											<i class="fa fa-envelope"></i>
											<input type="email" name="uName" class="form-control" id="username" placeholder="Enter your email" value="" />
										</div>
									</div>
								</div>
								<div class="col-sm-12">
									<div class="form-group">
										<div class="inner-addon left-addon">
											<i class="fa fa-key"></i>
											<input type="password" name="uPaas" class="form-control" id="Password" placeholder="Enter your password" />
										</div>
									</div>
								</div>
								<div class="col-sm-12">
									<div class="form-group">
										<input type="submit" class="btn btn-block btn-primary  btn-log" name="loggin" value="Login" />
									</div>
								</div>
							</div>
						</div>
						<div class="login-footer">
							<div class="col-xs-12">
								<div class="form-group">
									<router-link class="forgot" to="/forgotpassword"> Forgot Password </router-link>
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
	components: {
		Navbar
	}
}
</script>