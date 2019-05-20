pragma solidity ^0.5.0;

import "./Token.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Base {
    using SafeMath for uint;
    mapping(uint=>address) public takenSubscribers;


    struct _Chit {
        uint id;
        address foreman;
        address[] subscribers;
        uint token;
        uint totalChit;
        uint16 chitPeriod;
        uint256 timeStamp;
    }
    
    event createChit(uint id, address foreman, address[] subscribers, uint16 chitPeriod, uint256 timeStamp);
    event transferChit(address foreman, address[] subscribers, uint16 chitPeriod, uint256 timeStamp);
    event Deposit(address token, address user, uint256 amount, uint256 balance);
    event Withdraw(address token, address user, uint256 amount, uint256 balance);

    // function balanceOf(address _token, address _user) public view returns (uint256) {
        // return tokens[_token][_user];
    // }

    /*function conductChit(uint _id, address _foreman, address[] memory _subscribers, uint16 _chitPeriod, uint256 _timeStamp) public {
        i = subscribers.length();
        for(i = 0; i < subscibers.length; i ++){
            require(subscribers[i] != takenSubscribers[i]);
            depositToken(subscribers[]);
        }

    }
    */

}
    