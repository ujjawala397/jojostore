#include <bits/stdc++.h>
using namespace std;

int main() {
	// your code goes here


	int t;
	cin>>t;
	while(t--)
	{
	    long int n;
	    cin>>n;
	    string s;
	    cin>>s;
	    for(int i=0;i<n;i++)
	    {
	        if(s[i]==0 && s[i+1]==0 && s[i+2]==0 && s[i+3]==0)
	        {
	            cout<<"a";
	        }
	        if(s[i]==0 && s[i+1]==0 && s[i+2]==0 && s[i+3]==1)
	        {
	            cout<<"b";
	        }
	        if(s[i]==0 && s[i+1]==0 && s[i+2]==1 && s[i+3]==0)
	        {
	            cout<<"c";
	        }
	        if(s[i]==0 && s[i+1]==0 && s[i+2]==1 && s[i+3]==1)
	        {
	            cout<<"d";
	        }
	        if(s[i]==0 && s[i+1]==1 && s[i+2]==0 && s[i+3]==0)
	        {
	            cout<<"e";

	        }
	        if(s[i]==0 && s[i+1]==1 && s[i+2]==0 && s[i+3]==1)
	        {
	            cout<<"f";

	        }
	        if(s[i]==0 && s[i+1]==1 && s[i+2]==1 && s[i+3]==0)
	        {
	            cout<<"g";

	        }
	        if(s[i]==0 && s[i+1]==1 && s[i+2]==1 && s[i+3]==1)
	        {
	            cout<<"h";

	        }
	        if(s[i]==1 && s[i+1]==0 && s[i+2]==0 && s[i+3]==0)
	        {
	            cout<<"i";

	        }
	        if(s[i]==1 && s[i+1]==0 && s[i+2]==0 && s[i+3]==1)
	        {
	            cout<<"j";

	        }
	        if(s[i]==1 && s[i+1]==0 && s[i+2]==1 && s[i+3]==0)
	        {
	            cout<<"k";

	        }
	        if(s[i]==1 && s[i+1]==0 && s[i+2]==1 && s[i+3]==1)
	        {
	            cout<<"l";

	        }
	        if(s[i]==1 && s[i+1]==1 && s[i+2]==0 && s[i+3]==0)
	        {
	            cout<<"m";

	        }
	        if(s[i]==1 && s[i+1]==1 && s[i+2]==1 && s[i+3]==0)
	        {
	            cout<<"n";

	        }
	        if(s[i]==1 && s[i+1]==1 && s[i+2]==0 && s[i+3]==1)
	        {
	            cout<<"o";

	        }
	        if(s[i]==1 && s[i+1]==1 && s[i+2]==1 && s[i+3]==1)
	        {
	            cout<<"p";
	        }
	        i=i+3;
	    }
	    cout<<endl;
	}

	return 0;
}
