<template>
    <div>
        <DashNav />
        <section id="pagecontent">
            <DashSide />
            <div class="main_crumb">
                <router-link to="/dashboard">Home</router-link>
                <span>/</span>
                <router-link to="/add-prophecy">Add Prophecy</router-link>
            </div>
            <div class="main_body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="main_lord">
                                <router-link 
                                    to="/prophecies" 
                                    class="btn pull-right btn-primary">LIST PROPHECIES
                                </router-link>
                                <h1>Add Prophecy</h1>
                                <AddProphecyForm />
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
import AddProphecyForm from '../forms/AddProphecyForm'

export default {
	components: {
        DashNav,
        DashSide,
        AddProphecyForm
	}
}
</script>
