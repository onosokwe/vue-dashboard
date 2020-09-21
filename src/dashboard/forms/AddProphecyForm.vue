<template>
    <div>
        <form >
            <div class="row">
                <div class="col-lg-4 form-group">
                    <label>Prophecy Banner: (200kb) <span>*</span></label>
                    <input 
                        type="file" 
                        required 
                        name="" 
                        class="form-control" 
                    />
                </div>
                <div class="col-lg-4 form-group">
                    <label>Prophecy Minister: <span>*</span></label>
                    <input 
                        type="text" 
                        required 
                        name="" 
                        class="form-control" 
                        placeholder="Prophecy Minister"
                    />
                </div>
                <div class="col-lg-4 form-group">
                    <label>Prophecy Date: <span>*</span></label>
                    <input 
                        type="date" 
                        required
                        name="" 
                        class="form-control" 
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <label>Main Prophecy: <span>*</span></label>
                    <wysiwyg class="bg-white" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 form-group">
                    <input 
                    type="submit" 
                    name="" 
                    class="btn btn-apprv btn-block add" 
                    value="POST PROPHECY" />
                </div>
            </div>
        </form>
    </div>
</template>