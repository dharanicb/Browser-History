import {Component} from 'react'

import BrowserHistory from './Components/BrowserHistory'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    initialHistory: initialHistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = id => {
    const {initialHistory} = this.state
    const filteredUsersData = initialHistory.filter(each => each.id !== id)
    this.setState({
      initialHistory: filteredUsersData,
    })
  }

  render() {
    const {searchInput, initialHistory} = this.state

    const searchResults = initialHistory.filter(eachUser =>
      eachUser.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="nav-card-container">
        <div className="nav-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="logo-container"
            />
          </div>
          <div className="search-input">
            <label htmlFor="searchLabel">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                alt="search"
                className="search"
              />
            </label>
            <input
              type="search"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              id="searchLabel"
              className="search-input-container"
            />
          </div>
        </div>
        <div className="search-results-container">
          {initialHistory.length < 1 ? (
            <div className="text">
              <p>There is no history to show</p>
            </div>
          ) : (
            <ul className="card-list-container">
              {searchResults.map(eachUser => (
                <BrowserHistory
                  initialHistory={eachUser}
                  key={(eachUser.id, eachUser.timeAccessed)}
                  deleteUser={this.deleteUser}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default App
