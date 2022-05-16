 arr=[ [ 'a', 'b', 'a' ], [ 'x', 'y', 'z' ], [ 'b', 'd', 'r' ] ]
 str='axbaydb'
var n =3,m=3
len=str.length
console.log(len)
var i =0;
var j =0
while(true){
    
    if(j==n-1){
        j=0
    }
    j
        for(var l =0;l<m ;l++){
            if(arr[j][l]==str[i]){
                console.log(str[i])

                arr[j][l]="sai"
                i++
                break;
            }
        }
        if(j==n-1&&l==m-1){
            break;
        }
        if(i==len-1){
            break;
        }
j++
}
 console.log(arr)