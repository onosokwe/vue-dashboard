<template>
    <div>
        <DashNav />
        <section id="pagecontent">
            <DashSide />
            <div class="main_crumb">
                <router-link to="/dashboard">Home</router-link>
                <span>/</span>
                <router-link to="/bible-promises">Bible Promises</router-link>
            </div>
            <div class="main_body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="btnrows">
                                <router-link to='/bible-promises' class='btn btn-add'>
                                    <i class='fa fa-plus-circle'></i> Bible Promises
                                </router-link>
                                <router-link to='/promise-categories' class='btn btn-list'>
                                    <i class='fa fa-bars'></i> Promise Categories
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="main_lord">
                                <router-link 
                                    to="/add-promises" 
                                    class="btn pull-right btn-primary">ADD PROMISE
                                </router-link>
                                <h1>Bible Promises</h1>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="search" onkeyup="Searcher()" placeholder="Search by Title">
                                </div>
                                <GrowthDevList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>

<script>
import DashNav from '../inc/DashNav'
import DashSide from '../inc/DashSide'
import GrowthDevList from '../lists/GrowthDevList'

export default {
	components: {
        DashNav,
        DashSide,
        GrowthDevList
	}
}
</script>
