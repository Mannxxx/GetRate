#include<iostream>
using namespace std;
int main()
{
    int n,h;
    int a;
    int count=0;
    cin>>n>>h;
    while(n--)
    {
        cin>>a;
        if(a<=h){
            count++;
        }
        else{
            count=count + 2;
        }
    }
    cout<<count<<endl;
    return 0;
}