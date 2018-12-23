export class BucketInfoModel{
    bucket_name: String;
    creation_date: String;
    last_modified: String;
    number_of_files: Number;
    total_size_of_files: Number;
}

export class BucketDetailsModel{
    bucket_name: String;
    file_paths: String[];
}