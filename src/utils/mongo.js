const MongoClient = require('mongodb').MongoClient;
const date = require('date-and-time');

const databaseUpload = async (data) => {

    var url = "mongodb://localhost:27017/mydb";

    const deliverability = data[0]
    const quality_score = data[1]
    const valid_format = data[2]
    const free_email = data[3]
    const disposable_email = data[4]
    const role_email = data[5]
    const MX_records = data[6]
    const SMTP_records = data[7]
    const email = data[8]
    const date = date.format(new Date(), 'MM-DD-YYYY')


    // puts this data in database
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb"); // new Date(), 'YYYY-MM-DD'
        var myobj = {
            deliverability: deliverability,
            quality_score: quality_score,
            valid_format: valid_format,
            free_email: free_email,
            disposable_email: disposable_email,
            role_email: role_email,
            MX_records: MX_records,
            SMTP_records: SMTP_records,
            SMTP_records: percent_change_90d,
            email: email,
            data: date
        };
        dbo.collection(collectionName).insertOne(myobj, function(err, result) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });

}


exports.databaseUpload = databaseUpload;