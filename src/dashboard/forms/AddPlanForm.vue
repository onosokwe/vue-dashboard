<template>
    <div>
        <form >
            <div class="row">
                <div class="col-lg-12 form-group">
                    <label>Name of Plan <span>*</span></label>
                    <input 
                        type="text" 
                        required
                        name="" 
                        class="form-control" 
                        placeholder="Name of Plan" 
                    />
                </div>
                <div class="col-lg-12 form-group">
                    <label>Number of Days <span>*</span></label>
                    <select class="form-control mb-3">
                        <option>Name of Plan</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 form-group">
                    <input 
                    type="submit" 
                    name="" 
                    class="btn btn-apprv btn-block add" 
                    value="ADD PLAN" />
                </div>
            </div>
        </form>
    </div>
</template>