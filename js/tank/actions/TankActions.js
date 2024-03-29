/**
 * Created by erfan on 11/19/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TankConstants = require('../constants/TankConstants');

var TankActions = {

    /**
     * updates game
     */
    update: function() {
        AppDispatcher.handleViewAction({
            actionType: TankConstants.actions.UPDATE
        });
    },
    keyDown: function(keyCode) {
        AppDispatcher.handleViewAction({
            actionType: TankConstants.actions.KEY_DOWN,
            keyCode: keyCode - 37
        });
    },
    keyUp: function(keyCode) {
        AppDispatcher.handleViewAction({
            actionType: TankConstants.actions.KEY_UP,
            keyCode: keyCode - 37
        });
    },
    newBullet: function(playerIndex){
        AppDispatcher.handleViewAction({
            actionType: TankConstants.actions.NEW_BULLET,
            playerIndex: playerIndex
        });
    }
};

module.exports = TankActions;