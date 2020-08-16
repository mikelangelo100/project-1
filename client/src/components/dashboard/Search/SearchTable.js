import React,{ Component } from 'react'
import axios from "axios";
import SearchBox from "./SearchBox";
import _ from "lodash";
import UsersTable from "./UsersTable";
import { paginate } from './utils/paginate';
import Sidebar from '../sidebar'

class BloodSearch extends Component {

    state = { 
        bloodType: [],
        handles:[],
        currentPage: 1,
        pageSize: 4,
        searchQuery: "",
        selectedBloodGroup: null,
        sortColumn: {path : "", order: "asc"}
     };

    componentDidMount() {
        axios.get('/api/profile/username')
        .then(response => response.data.map(bloodsearch => ({
            _id: `${bloodsearch._id}`,
            handles : `${bloodsearch.handle}`,
            bloodGroup: `${bloodsearch.bloodGroup}`,
            city: `${bloodsearch.city}`}
            ))
          )
        .catch(error => {
          console.log(error)
        })
        
      };
      handlePageChange = page => {
        this.setState({ currentPage: page });
      };
      
      handleSearch = query => {
           this.setState({ searchQuery: "", selectedBloodGroup: null, currentPage: 1 });
        };
        handleBloodGroupSelect = bloodGroup => {
          this.setState({ selectedBloodGroup: bloodGroup, searchQuery: "", currentPage: 1 });
        };
        handleSort = sortColumn => {
          this.setState({ sortColumn });
        };
        
getPagedData = () => {
  
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedBloodGroup,
      searchQuery,
      handles
    } = this.state;

    let filtered = handles;
    if (searchQuery)
      filtered = handles.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedBloodGroup && selectedBloodGroup._id)
      filtered = handles.filter(m => m.bloodGroup._id === selectedBloodGroup._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const name = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: name };
  };

    render() {
      const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

      const { totalCount, data: name } = this.getPagedData();
        return (<div>
            <Sidebar />
            <h1 className="blood-search-title">Blood Search</h1>
            <p>Showing {totalCount} users in the database.</p>
            <SearchBox  value={searchQuery} onChange={this.handleSearch} />
        
            <UsersTable
            username={name}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
        </div>);
    }
}
export default BloodSearch;



