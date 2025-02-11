input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("L")
    OLED.writeStringNewLine(getdatetimestr())
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    OLED.writeStringNewLine("Knopf A")
})
input.onButtonPressed(Button.AB, function () {
    OLED.clear()
    RTC_DS1307.setTime(RTC_DS1307.TimeType.YEAR, 2025)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.MONTH, 2)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.DAY, 10)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.HOUR, 22)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.MINUTE, 44)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.SECOND, 0)
    OLED.writeStringNewLine("Uhrzeit gesetzt: " + getdatetimestr())
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    OLED.writeStringNewLine("Knopf B")
})
function getdatetimestr () {
    strdatetime = "" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR), 4) + "-" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH), 2) + "-" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY), 2) + " " + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR), 2) + ":" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE), 2) + ":" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND), 2)
    return strdatetime
}
function zeropad (num: number, length: number) {
    num_str = "" + num
    while (num_str.length < length) {
        num_str = "0" + num_str
    }
    return num_str
}
let num_str = ""
let strdatetime = ""
OLED.init(128, 64)
basic.forever(function () {
    OLED.writeStringNewLine("" + getdatetimestr() + "|" + Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P1))
    basic.pause(5000)
})
