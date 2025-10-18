export default function EventStrip(){
    const items = [
      { day:'Wed', name:'Trivia Night', time:'19:30' },
      { day:'Fri', name:'Karaoke', time:'20:00' },
      { day:'Sat', name:'Live Football', time:'Matchdays' },
      { day:'Fri', name:'Poker Night', time:'19:30' },
    ];
    return (
      <div className="bg-stone/30 py-4">
        <div className="container-wide grid grid-cols-2 sm:grid-cols-4 gap-3">
          {items.map((i,idx)=>(
            <div key={idx} className="bg-white/85 rounded-xl p-3 shadow flex items-center justify-between">
              <div>
                <div className="text-xs text-timber/60">{i.day}</div>
                <div className="font-semibold">{i.name}</div>
              </div>
              <div className="text-sm text-timber/70">{i.time}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  