import Event from "../models/event.models.js";

export const getEvents = async (req, res ,next)=>{
    try{
        const events = await User.find();
        res.status(200).json({
            success: true,
            data: events,
          });

    }
    catch(error){
        next(error);
    }
};
export const getEvent=async(req ,res ,next)=>{
    try{
        const event = await Event.findById(req.params.id);
        if (!event){
            const error =new error('event not found');
            error.statusCode = 404;
            throw error;
        }

    }
    catch(error){
        next(error);
    }
}
export const addEvent = async (eventData) => {
    try {
      const newEvent = new Event({
        title: eventData.title,
        date: eventData.date,
        time: eventData.time,
        type: eventData.type,
      });
  
      const savedEvent = await newEvent.save();
      return savedEvent;
    } catch (error) {
      throw error;
    }
  };

  export const deleteEvent = async (eventId) => {
    try {
      const deletedEvent = await Event.findByIdAndDelete(eventId);
      if (!deletedEvent) {
        return { message: "Event not found" };
      }
      return { message: "Event deleted successfully", deletedEvent };
    } catch (error) {
      throw error;
    }
  };

  export const updateEvent = async (eventId, updateData) => {
    try {
      const updatedEvent = await Event.findByIdAndUpdate(
        eventId,
        updateData,
        { new: true, runValidators: true } // returns the updated doc & validates
      );
  
      if (!updatedEvent) {
        return { message: "Event not found" };
      }
  
      return updatedEvent;
    } catch (error) {
      throw error;
    }
  };