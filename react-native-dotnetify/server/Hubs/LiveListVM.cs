using System;
using System.Threading;
using DotNetify;

namespace dotnetify.Hubs
{
    public class LiveListVM : BaseVM
    {
        /*
         * Her 1sn'yede bir timer nesnesinin çalışması için 1000ms değerini burada belirliyoruz ve bu field'ı LiveListVM contructor'ında yer alan timer nesnesi constructor'ında kullanıyoruz.
         */
        private const int _timeInterval = 1000;

        /*
         * React-native tarafındaki People dizimizi beslemek için fake olarak data üreteceğimiz timer nesnemiz.
         */
        private Timer _timer;

        public LiveListVM()
        {
            _timer = new Timer(state =>
            {
                // React Native tarafında state nesnemiz içerisindeki people dizisine yeni kaydın eklenmesini sağlıyoruz.
                this.AddList("people", new Person
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = Faker.Name.First(),
                    Surname = Faker.Name.Last(),
                    Age = Faker.RandomNumber.Next(18, 60)
                });
                // PushUpdates ile yapılan değişikliklerin bu LiveGaugeVM'i kullanan aktif ilgili ekranlara yansıması sağlanıyor.
                PushUpdates(); 
            }, null, _timeInterval, _timeInterval);
        }

        public override void Dispose()
        {
            _timer.Dispose();
            base.Dispose();   
        }
    }
}
