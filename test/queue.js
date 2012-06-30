
var simplequeue = require('../');
var Queue = simplequeue.Queue;
var Message = simplequeue.Message;

exports['Get null Message from empty Queue']= function(test) {
    var queue = new Queue();    
    
    test.equal(queue.getMessage(), null);
    test.done();
}

exports['Put Message in Queue']= function(test) {
    var queue = new Queue();        
    
    queue.putMessage(new Message("foo"));
    test.done();
}

exports['Put ang get Message from Queue']= function(test) {
    var queue = new Queue();        
    
    queue.putMessage(new Message("foo"));
    var msg = queue.getMessage();
    
    test.ok(msg);
    test.ok(msg.payload);
    test.equal(msg.payload, "foo");
    test.done();
}

exports['Put and get two Messages from Queue']= function(test) {
    var queue = new Queue();        
    
    queue.putMessage(new Message("foo"));
    queue.putMessage(new Message("bar"));
    
    var msg1 = queue.getMessage();
    var msg2 = queue.getMessage();
    
    test.ok(msg1);
    test.equal(msg1.payload, "foo");
    test.ok(msg2);
    test.equal(msg2.payload, "bar");
    
    test.done();
}

