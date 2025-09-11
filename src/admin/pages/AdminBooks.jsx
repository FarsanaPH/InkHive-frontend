import React, { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { ImCancelCircle } from 'react-icons/im'

function AdminBooks() {
  const [booklistStatus, setBooklistStatus] = useState(true)
  const [userlistStatus, setUserlistStatus] = useState(false)
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div>
          <AdminSidebar />
        </div>
        <div>
          <h1 className='text-center text-2xl my-4'>All Books</h1>

          <div className="flex justify-center cursor-pointer items-center text-lg my-10">
            <button onClick={() => { setBooklistStatus(true); setUserlistStatus(false) }}
              className={booklistStatus ? `px-4 py-3 text-blue-400 text-shadow-2xs border-gray-300 border-l border-r border-t rounded` :
                `px-4 py-3 border-b border-gray-300`}>
              Book List</button>
            <button onClick={() => { setUserlistStatus(true); setBooklistStatus(false) }}
              className={userlistStatus ? `px-4 py-3 text-blue-400 text-shadow-2xs border-gray-300 border-l border-r border-t rounded` :
                `px-4 py-3 border-b border-gray-300`}
            >User List</button>
          </div>

          {booklistStatus &&
            <div className='md:grid grid-cols-4'>
              <div className='px-10 py-3'>
                <div className="p-3 shadow">
                  <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" style={{ width: "100%", height: "300px" }} alt="" />
                  <div className="flex justify-center items-center flex-col my-3">
                    <p>Author</p>
                    <h3>Title</h3>
                    <button type="button" className='w-full py-2 bg-green-900 text-white mt-3 hover:bg-green-950'>Approved</button>
                    <div className='w-full flex justify-end'>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAmVBMVEX///8PmEj//f8AlD8AlkMAlD38/v0Ql0kAlTwAkDQAkzgAkjkAl0IAl0ATl0sKmEbt9vDU6tvk8ukAji0Alja53cVTqnDH49Almkh0t4io0rVbr3FQrG0ynlfZ7uKXy6ktnFBcrnhFqmd/vZF2v5CNxJ+ExpoAiyMopFiu2b+83cs+o2af1rSZ1a40pl9ptoluuIO558nN8N84UDj0AAAOE0lEQVR4nO1c65aiuhImJCRcDYKK0nK1sVvtsT3z/g93AgkKeAvCzOwfXWvP2mu1ED4qda8KivJDP/RDP/RD/wVS1ep/GLsVeS7G4u/4X8K6Qe50HxbF6pRlbyVlq1WRhPvY/de4OGHON3deZFG6tC1LgxA6jCDUGNnLNMq2ewEWq/8SquvNt+DDtyClFNwgirSPj89t4P07CSifHO/eI8O074CsiJAJsDXz830XM4nFyl9nK1bw/junGroL8cJV9g9Z9LDa/22QJblfR8hQkuc4a7js8sPXX1Yu7H1Rw6EdlIRQgJCtQcd2EAW0+zvDaqBfpbT+rf2Pi8iwuyCQZvi+Do55vl6v8yNwDMO3UEd4CbWixPtLMHEY6ejyZAdQ2/Y/rMP313zqea4gz5vOk++J4c9KMa55SwiBehreMQEqHtE24HlkNNlEob6MsiS+8wgcJ1m+1LXmLdD6nN+8HCtuvNtu771HL4pXvlNDpIAgA2QJt+iqcr0+/4u7L7JJQwook9VVfL22G3wdIBMYeOO3foTV8GBeOGM7RvQreKTHZ+jetIh8DQh7yxTNOnT55iVZamnsCnM7mKP4TUNnJaIQLuby1kZ1dwfTuUiA7ofNn+NNqsPK4OoJvrE3vWAGTDptInZPS1eBcvb2chScUo0bLYrSGicuBXnjz9CkXBgt58ognMz5hQSe+eH4m6D/cioONkYlq2Y6Pf+RWTtS66exDgaA5MuddEcYJIDYeq947ZJ5wdpHwDrGZ77hMDVra+efPGWQicKKl9UvbQPtOMSAuF/RbHG2+Tg4WLXgInM70GlhJV6YtRZB8u0NWY4tVnicnez9N6ZeOwMEwmf3PiYGKmZWia9HuF8ZakAw/xesjYvnsIYbei+a1a9tHrzRIgpc2M45bkEf88ELxkdrMuGr2RtlmLQ3yMv9ycWtTgbiZGbJW9TeCIGvcUCWkf7u07o4ucp8DiT3TRdqifxgvPCmoI3cABnz4QL1LfhJtMn0+dUyxN7Wza1GPIWs4fzERa1HWj44qDkvGhwv2s5w0t3wNedL7oMnWjQdSY2wsku1C8yJDUYIQL0JlyRq+9ORzJKq7JwGTkD9ZDhO/KnVuzMdbOSrBdl/W7+Z9FGrOP/06qJY2QpRcia7cXadqdHGbKYlxNpgUUfzXo9DAyAicrMYqyiHM72VmJorV4hUzCK8Fx/ivmnlJhEwy0Zw75yfmdmESc2Fq/A8f3qYZS9VJ9jthXAdMB2nvlEGYbNJEyiMXBGIBZEGjOQ1fY1TVEk9BfNRFImtuLCaekRK08yxzUuDZaevWepMMNTaDs22BHkHs6XvzkRIJQ6XZZZDZt+vBLrTD2GZFiMVtuJDSz6Zbd6L4q631oVJfSFjwm9VikSA9rIyNlcr5VNr8ZOalzx0b5VxOQVO1vdRWJkLK2J9D0ZZrqeyYLFV3KMsQar3GSuZcCykbwlVdb9hlSQhxx1FPt2F1tR3Qvxv97JTOBapo7bq+TQ1sPmd1tcIKMvge9bSdwI7RrPg8kv1noKGRRSK8lG6BO4Jtsr8BEadImkcVdEPtU79QjTPqu6z9WQ4SlVVTsx+NoHa1u/2NVgpIFcxvR9nCp8z9Dg8WGbP3frt+jS1dmr3ojjilfTZrx5rqxjwlc1iBJy4MEAbp5ZcxThYeedWAaV9Vp8Lp+QPL7djNYSdQv5sdcuFTEXyPJM3+uzteN0O5oNxKsr/gNbujsDP264u5x5mtpFfO865Chr7oY0WrAQfbX4Se3J7m/Be6MVavrQlvJJ9HOrlsTL9hC2cgC7vOR83FZm+tHfCIhA1N4NtqLto4yTELO4tilc8STETWZvP3B1XzsHpttoO6Nkmze76SBZezCqgjnSkH4NqD1Cz4vAab09+GyfQFw/a9kI1EJCryLA3Myo1hacmOncXhuF86tZDGTIUtg0o8/D5I3vnnngMJVngweo7vx42ZcVd6bqpg+OikC9A7TttfPIsqSn4g42tHFDlKLRv3ogPvIgQUvbcdJiH+FaXrktqHGmgTehJ5MCtDdXWUkAVLDasHeDs/Jo90P/8eh4CYDfqGHqgrZ9oiRfxZ/hSGqHGlQYQuG6rUHEZdrCtPHEfKRhz5fjdAK3UGNhPe5z4UD1i8iEXCu24qhrvrTUUnFiX0iuEh4e2CyvJrLPvYFYoz+otQpsMufxcBNvGVTNln17a9MAxDmXd7PaCzHIg0Bk9sE7PzWNSSR2RDNoy3qH76EYxLFmk6DIhAEyQuPfefBrBSUvlCZ1IREXc3RPtW4qjXFDALUGZtxSEWoubD8cqPnQUnmXdd11ng2JeS9DeJGAqilC9j1tzAkHUGMwhAGrb0lRdXbnpeE4m1IfnODHGHzx4zmXiJzflSxs3f2V7SppWp2wHd52iGnYNKIsY5cJhrsc0ktl5b8nfCtz6kcVtaTse0tOkXZNkl0TdER4WiEnhVPiIEpUqH8ZLXnmIbgNV9pM2Ujj7dhs7ha9CO2ZB0XEqN0L4yRV5KZMCTZeVjMK7fqxhpbiomlFryODdIt3JLCeUDL+OfJynD9C7mlfayM5AnkZrJ84s+tzv5HLspbOHfqxBOZfupYxregaUUah1sBBYuOIt4sjp4gSGdMS1HhUoVhOrjYTa2ptX+Vk3g6DLUeskna2tYW+g92W0hFroXa5ZtCpvdYsNjPRIPkc88p6JFNB4WS1vHx5dhDdXgJzZjlkm60pAKewxgVFrvQxQL62ehSYPr8K52VFtYjPff+haJia+bz2Sbl7slLOjtWeynrzP8cqqIxRdzecSBPq0uHn3kUoJCxZA/cdXKUF6hZRe/YW976pHT0XlQcltZ3NFdfT02OhiZQdv4LrC/iG/8biOnh4q8oUWAujvh1cxg7P5eA5UMqMUFPCgRDtJXV3wJMJ4Xr3vNGCviNha3qtX8cUjfEOuzj3nryUR8LgL8hgpdfpVhURFwdhJiTVv2RG4eHa1qgSfj8fw9YXbp3Cprs/JhQxQlycuUjYiuXZETYaiftM3PK+nknk9VjibyPJ5y0dV3h8hNXt2/fZLLi9HqauxeoLVPAGSCSLdvFsPaTB01rMFkFQOlEqmA1gJRTVPqo47v/buNRnbfpV1vDrrkhzFfBoNriUYgnFyHddxgsdeDFXPrQPJ+ijbzrWIfSVUAbMI9CrnFED7zV1hZc/NMpQeEMAbUcOXGIjHZYPoFkxi9xxIULEwIZZMqYJTyDnqHOSs4PaW5pNZ3w6AK4IMJH+jEBbbmssAVfHixubri544lbrPlEv3mTD+5vGvlskkj0y4wJWDombvGU7eeSf6ew/RrmsyvpyY4c0VS633vj0/TwxBzHp4M9UVfdaZZLveO3ZYCqOeQ4dYSfSqQE1pLx3czERZTfKuXafqcL8/d5vU0s9XjzR7BbDM5PAMz5HLIDE+tMoONO09wJSIQVW/3ygDznni7iykAl+WQbViaLTo2+kTlTXbynuO/QZCPQzJgfbaSXCa9T4BymN7lh72nANU3YzrE/yUzCWmjRiaTvpN82HFI7VB7Nl5ZyGUzYXbkutQYLy5HKew3nuGTSys5Qm93fdci8oCzaoDMqFyR/VYqrus+1/E6DsQHWu8M4Ce9fZukcjxgCarGNu6w2D1GgVUL+MH1H/hdDOui6oASW6HJ461UtovU1LxF7+R6OuXZlgC0fy0P+WSQpbpUWBTYBS9jvwzoZnwkottvnLgDjP1EHvJbJvMk1VcLCGC8Av3GzHHR1i7s5dmgpjNyG0hOrJubZpsk2mvI8i8Dc2di0zqc5tC0aazWX7+p77ggOuHEEeuPnJjCYxP3N0QJwr+1Jn44JM3gom5enkNrLi8TUdsK5VUqH4PwMqUaGVXigB9Mmj9oI7d9cMfOL7P1CASJ0fgZNDMd9WomfCdYV54zHP6FT+9RV2+0JOBq+P3OirSFt4YB0YaS6vx2hRut1eidJvcdY3UXI8pp2VBILe4wtPS6Q5eOo7OPM1HRFo2I3XBTzP3Bi+slu2Puk0Hj2OcchAUHOvUFaZjHI8sTxinkJ+0taH+Nc4BF4x/sUiCKxI6jnSMkyEldeqG/M0oR1xc5jdFnO2Mws+SmNnYE5HoE2ItRlg3WNenyysDOiIFl0kSfZIMPHKoFOC8mtY/sX64uhK/1fE7of4xGCCpODj65zxQexvt+G5N528rUJvxo8cUaRNjaTw3ujAiFFAzG90xY+xuZ2dGUC1K+isVg+km0flLJ5Ra42hmi8qB4bAxSIQ0UkHtd1RmO9Edcf6IAKv8VMn4IVlJ01xvfBHHQMnUlf8MhhsUtHG4xdbXo5nPa/IKdKmEUtuanEJJIXPDEzDsS30K6oXsiNFLhAPa/CQVhSg6VR/UwfjWx2rEMDTef0fs0vouYtvG573vLo1HRdoq3FHoG2smAzdLVEwFvd9fuf+hNwu9NkzLAvGfRVoZGNTo1pXHJB3Dj7Ii3AexV+NlCONgHm6zyDcc0BzlBJa9mf5xnBzEfmHonVq4DTUNpfn67bSq6JStD6lmWbAzxwegn73wuaAXgTJRzboQymFiihCCekkahMh2rlqPCFrZdKQDxrIUrCIN3vpsHgH1sGNn6BFp2vG9+kbU38TJHjcNF/B+a/mKmQbKwvivo+TkTrfkwyzF9f5gUSkRwJ59gG3wRw3nU/pdLD51R+t+ye/MSAQhSRfJH/RCMlTZcxzvitUhRZZhCbyUBUYIOpphoGh9KsLSuP/bT7teTkl7032YvGd5inTd8A0dpvnbexLup95/5JuuNZWhCa6/kMtJONV/ycgbVMNpOXxV7XGc7Id+6Id+qEX/B+/Hz5NeEarsAAAAAElFTkSuQmCC"
                        alt="" style={{ width: "40px", height: "40px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          {userlistStatus &&
            <div className='md:grid grid-cols-4'>
              <div className='px-10 py-3'>
                <div className="bg-gray-200 p-4 rounded-md shadow-md w-64">
                  <p className="text-sm text-red-600 mb-2">Id : 685119252346cf8d388ff1</p>
                  <div className="flex items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 cursor-pointer">Max </h3>
                      <p className="text-blue-700 text-sm">max@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default AdminBooks