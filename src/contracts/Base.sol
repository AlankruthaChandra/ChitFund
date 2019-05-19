pragma solidity ^0.5.0;

import "./Token.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Chit {
    using SafeMath for uint;

    struct _Chit {
        uint id;
        address foreman;
        address[] subscribers;
        uint16 chitPeriod;
        uint256 timeStamp;
        uint256 timeIntervals;
    }

    struct 

    event CreateChit (address token, )
}