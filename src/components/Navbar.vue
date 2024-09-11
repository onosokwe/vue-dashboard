<template>
    <nav class="navbar navbar-expand-md navbar-616 fixed-top bg-blue">
        <div class="container">
            <router-link 
                class="navbar-brand" 
                to="/">
                <img 
                    src="../assets/logo.png" 
                    height="30" 
                    width="auto" 
                    class="img-responsive" 
                    style="margin-right: 20px;" 
                />
            </router-link>
            <button 
                class="navbar-toggler navbar-toggler-right" 
                data-toggle="collapse" 
                data-target="#navbarResponsive" 
                aria-controls="navbarResponsive">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/#features">Features</router-link>
                    </li>
                    
                    <li class="nav-item">
                        <router-link class="nav-link" to="/#pricing">Pricing</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/documentation">Docs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signup">Get Started</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
