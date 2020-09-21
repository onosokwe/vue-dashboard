<template>
    <div>
        <form >
            <div class="row">
                <div class="col-lg-6 form-group">
                    <label>Podcast Title: <span>*</span></label>
                    <input 
                        type="text" 
                        required 
                        name="" 
                        class="form-control" 
                        placeholder="Podcast Title"
                    />
                </div>
                <div class="col-lg-6 form-group">
                    <label>Podcast Preacher: <span>*</span></label>
                    <input 
                        type="text" 
                        required 
                        name="" 
                        class="form-control" 
                        placeholder="Podcast Preacher"
                    />
                </div>
                <div class="col-lg-4 form-group">
                    <label>Podcast File: <span>*</span></label>
                    <input 
                        type="file" 
                        required
                        name="" 
                        class="form-control" 
                    />
                </div>
                <div class="col-lg-4 form-group">
                    <label>Podcast Image: <span>*</span></label>
                    <input 
                        type="file" 
                        required
                        name="" 
                        class="form-control"  
                    />
                </div>
                <div class="col-lg-4 form-group">
                    <label>Podcast Type:</label>
                    <select class="form-control mb-3">
                        <option>Select Type</option>
                        <option>Audio (mp3)</option>
                        <option>Video (mp4)</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 form-group">
                    <input 
                    type="submit" 
                    name="" 
                    class="btn btn-apprv btn-block add" 
                    value="UPLOAD PODCAST" />
                </div>
            </div>
        </form>
    </div>
</template>