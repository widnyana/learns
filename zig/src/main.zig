const std = @import("std");

pub fn main() !void {
    std.debug.print("All your {s} are belong to us.\n\n\n", .{"dreams"});

    const stdout_file = std.io.getStdOut().writer();
    var bw = std.io.bufferedWriter(stdout_file);
    const stdout = bw.writer();

    try stdout.print("Agak mirip bahasa rajungan dengan sedikit taste kopi.\n", .{});
    try stdout.print("apakah ini kopi yang cosplay jadi rajungan?", .{});
    try bw.flush(); // don't forget to flush!
}
